import React, { useEffect, useMemo, useState } from "react";
import { authApi } from "../../services/api";

const slugify = (value) =>
  value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function WebsiteCMS() {
  const [pages, setPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(true);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const fetchPages = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await authApi.request(`/admin/cms`);
      setPages(Array.isArray(data) ? data : data.data ?? data.pages ?? []);
    } catch (err) {
      setError(err.message || "Unable to load CMS pages.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPages();
  }, []);

  const resetForm = () => {
    setSelectedPage(null);
    setTitle("");
    setSlug("");
    setContent("");
    setPublished(true);
    setError("");
    setSuccess("");
  };

  const loadPage = (page) => {
    setSelectedPage(page);
    setTitle(page.title || "");
    setSlug(page.slug || "");
    setContent(page.content || "");
    setPublished(Boolean(page.published));
    setError("");
    setSuccess("");
  };

  const savePage = async () => {
    if (!title.trim() || !slug.trim()) {
      setError("Title and slug are required.");
      setSuccess("");
      return;
    }

    const payload = { title: title.trim(), slug: slugify(slug || title), content, published };
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      if (selectedPage) {
        await authApi.request(`/admin/cms/${selectedPage._id}`, {
          method: "PUT",
          body: JSON.stringify(payload),
        });
        setSuccess("Page updated successfully.");
      } else {
        await authApi.request(`/admin/cms`, {
          method: "POST",
          body: JSON.stringify(payload),
        });
        setSuccess("Page created successfully.");
      }
      await fetchPages();
      resetForm();
    } catch (err) {
      setError(err.message || "Unable to save the page.");
    } finally {
      setLoading(false);
    }
  };

  const deletePage = async (id) => {
    if (!window.confirm("Delete this CMS page? This cannot be undone.")) return;
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await authApi.request(`/admin/cms/${id}`, { method: "DELETE" });
      setSuccess("Page removed successfully.");
      await fetchPages();
      if (selectedPage?._id === id) resetForm();
    } catch (err) {
      setError(err.message || "Unable to delete the page.");
    } finally {
      setLoading(false);
    }
  };

  const filteredPages = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return pages;
    return pages.filter(
      (page) =>
        page.title.toLowerCase().includes(term) ||
        page.slug.toLowerCase().includes(term) ||
        (page.content || "").toLowerCase().includes(term)
    );
  }, [pages, search]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-semibold">Website CMS</h3>
          <p className="mt-2 max-w-2xl text-sm text-gray-400">
            Manage landing pages, informational sections, and CMS content that powers the website.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search pages..."
            className="rounded-3xl border border-[#24A8E0]/20 bg-[#0f1118] px-4 py-3 text-sm text-white outline-none focus:border-[#24A8E0]"
          />
          <button
            type="button"
            onClick={resetForm}
            className="rounded-3xl border border-[#24A8E0]/20 bg-[#111015] px-5 py-3 text-sm text-white transition hover:bg-[#24A8E0]/10"
          >
            New page
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-[#24A8E0]/20 bg-[#111015]/90 p-6 shadow-lg shadow-black/20">
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-gray-300">
                Title
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Page title"
                  className="mt-2 w-full rounded-3xl border border-[#24A8E0]/20 bg-[#0f1118] px-4 py-3 text-sm text-white outline-none focus:border-[#24A8E0]"
                />
              </label>
              <label className="block text-sm text-gray-300">
                Slug
                <input
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="page-slug"
                  className="mt-2 w-full rounded-3xl border border-[#24A8E0]/20 bg-[#0f1118] px-4 py-3 text-sm text-white outline-none focus:border-[#24A8E0]"
                />
              </label>
            </div>

            <label className="block text-sm text-gray-300">
              Published
              <div className="mt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setPublished(true)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${published ? "bg-[#24A8E0] text-black" : "bg-[#111015] text-white"}`}
                >
                  Published
                </button>
                <button
                  type="button"
                  onClick={() => setPublished(false)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${!published ? "bg-[#24A8E0] text-black" : "bg-[#111015] text-white"}`}
                >
                  Draft
                </button>
              </div>
            </label>

            <label className="block text-sm text-gray-300">
              Content
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={10}
                placeholder="Page content, HTML or markdown...
                "
                className="mt-2 w-full rounded-3xl border border-[#24A8E0]/20 bg-[#0f1118] px-4 py-3 text-sm text-white outline-none focus:border-[#24A8E0]"
              />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                {error && <p className="text-sm text-red-300">{error}</p>}
                {success && <p className="text-sm text-green-300">{success}</p>}
              </div>
              <div className="flex flex-wrap gap-3">
                {selectedPage && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="rounded-3xl border border-[#24A8E0]/20 bg-[#111015] px-5 py-3 text-sm text-white transition hover:bg-[#24A8E0]/10"
                  >
                    Cancel edit
                  </button>
                )}
                <button
                  type="button"
                  onClick={savePage}
                  disabled={loading}
                  className="rounded-3xl bg-[#24A8E0] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#f1d94c] disabled:opacity-60"
                >
                  {selectedPage ? "Save changes" : "Create page"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[28px] border border-[#24A8E0]/20 bg-[#111015]/90 p-6 shadow-lg shadow-black/20">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-semibold">Page content list</h4>
                <p className="text-sm text-gray-400">Browse and edit website CMS pages.</p>
              </div>
              <span className="rounded-full bg-[#24A8E0]/10 px-3 py-1 text-xs font-semibold text-[#24A8E0]">
                {filteredPages.length} pages
              </span>
            </div>
            <div className="mt-6 divide-y divide-[#24A8E0]/10">
              {loading ? (
                <p className="py-6 text-center text-sm text-gray-400">Loading pages...</p>
              ) : filteredPages.length === 0 ? (
                <p className="py-6 text-center text-sm text-gray-400">No pages found.</p>
              ) : (
                filteredPages.map((page) => (
                  <div key={page._id} className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="text-base font-semibold text-white">{page.title}</div>
                      <div className="text-sm text-gray-400">/{page.slug} • {page.published ? "Published" : "Draft"}</div>
                      <div className="mt-2 text-xs text-gray-500">Updated {new Date(page.updatedAt || page.createdAt).toLocaleDateString()}</div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => loadPage(page)}
                        className="rounded-3xl border border-[#24A8E0]/20 bg-[#111015] px-4 py-2 text-sm text-white transition hover:bg-[#24A8E0]/10"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => deletePage(page._id)}
                        className="rounded-3xl border border-red-500/30 bg-[#111015] px-4 py-2 text-sm text-red-400 transition hover:bg-red-500/10"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="rounded-[28px] border border-[#24A8E0]/20 bg-[#111015]/90 p-6 shadow-lg shadow-black/20">
            <h4 className="text-lg font-semibold">Live preview</h4>
            <p className="mt-3 text-sm text-gray-400">Preview the content before you publish or update the CMS page.</p>
            <div className="mt-6 rounded-3xl border border-[#24A8E0]/10 bg-[#0b1220] p-6 text-sm text-gray-300">
              <h5 className="text-xl font-semibold text-white">{title || "Untitled page"}</h5>
              <p className="mt-3 whitespace-pre-line">{content || "Add page content to preview here."}</p>
              <div className="mt-4 text-xs text-gray-500">Slug: /{slug || "page-slug"} • {published ? "Published" : "Draft"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
