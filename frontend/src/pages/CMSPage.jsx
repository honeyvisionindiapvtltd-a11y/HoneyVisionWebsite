import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { cmsApi, ApiError } from "../services/api";

const CMSPage = () => {
  const { slug } = useParams();
  const [page, setPage] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const loadPage = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await cmsApi.get(slug);
      setPage(data.page ?? data);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Page not found.");
      setPage(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) loadPage();
  }, [slug]);

  if (loading) {
    return (
      <section className="min-h-screen bg-[#05070f] text-white py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-lg text-gray-400">Loading page...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen bg-[#05070f] text-white py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl font-bold">Page not found</h1>
          <p className="mt-4 text-gray-400">The page you are looking for does not exist or is not published yet.</p>
          <div className="mt-8">
            <Link to="/" className="inline-block rounded-full bg-[#24A8E0] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#f1d94c]">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#05070f] text-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 rounded-4xl border border-[#24A8E0]/20 bg-[#111015]/90 p-10 shadow-2xl shadow-black/20">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#24A8E0]/20 bg-[#24A8E0]/10 px-4 py-2 text-sm uppercase tracking-[4px] text-[#24A8E0]">
              CMS Page
            </div>
            <h1 className="text-4xl font-bold text-white">{page.title}</h1>
            <p className="text-sm text-gray-400">/{page.slug}</p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none rounded-4xl border border-[#24A8E0]/20 bg-[#111015]/90 p-10 shadow-2xl shadow-black/20">
          <div className="whitespace-pre-line text-gray-200">{page.content || "No content available."}</div>
        </div>
      </div>
    </section>
  );
};

export default CMSPage;
