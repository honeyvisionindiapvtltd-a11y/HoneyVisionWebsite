import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cmsApi, ApiError } from "../services/api";

const CMSIndex = () => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadPages = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await cmsApi.list();
      setPages(data.pages ?? data);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Unable to load pages.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPages();
  }, []);

  return (
    <section className="min-h-screen bg-[#05070f] text-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 rounded-4xl border border-[#24A8E0]/20 bg-[#111015]/90 p-10 shadow-2xl shadow-black/30">
          <h1 className="text-5xl font-bold">Website Pages</h1>
          <p className="mt-4 max-w-3xl text-gray-300">
            Browse the latest published pages created from the CMS. These pages are managed by the admin panel and delivered directly here.
          </p>
        </div>

        <div className="space-y-6">
          {loading ? (
            <div className="rounded-3xl border border-[#24A8E0]/20 bg-[#111015]/90 p-10 text-center text-gray-400">
              Loading pages...
            </div>
          ) : error ? (
            <div className="rounded-3xl border border-red-500/20 bg-[#111015]/90 p-10 text-center text-red-300">
              {error}
            </div>
          ) : pages.length === 0 ? (
            <div className="rounded-3xl border border-[#24A8E0]/20 bg-[#111015]/90 p-10 text-center text-gray-400">
              No CMS pages are published yet.
            </div>
          ) : (
            pages.map((page) => (
              <Link
                key={page._id}
                to={`/cms/${page.slug}`}
                className="block rounded-3xl border border-[#24A8E0]/20 bg-[#111015]/90 p-8 transition hover:border-[#24A8E0] hover:bg-[#111b2d]"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-white">{page.title}</h2>
                    <p className="mt-2 text-sm text-gray-400">/{page.slug}</p>
                  </div>
                  <span className="rounded-full bg-[#24A8E0]/10 px-4 py-2 text-sm font-semibold text-[#24A8E0]">
                    View page
                  </span>
                </div>
                <p className="mt-4 text-gray-300 line-clamp-3">{page.content || "No preview available."}</p>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default CMSIndex;
