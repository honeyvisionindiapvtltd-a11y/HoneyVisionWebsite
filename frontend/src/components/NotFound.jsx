import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen px-6 py-24 text-white sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center rounded-[2rem] border border-[#24A8E0]/20 bg-[#014733e6]/95 p-10 text-center shadow-2xl shadow-black/30 sm:p-16">
        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#24A8E0]/25 bg-[#24A8E0]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-[#24A8E0]">
          404 Error
        </div>
        <h1 className="text-5xl font-bold sm:text-6xl">Page not found</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
          The page you are looking for does not exist or may have been moved. Please return home and continue exploring Honey Vision.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/"
            className="rounded-full bg-[#24A8E0] px-7 py-3 text-sm font-semibold text-[#04111f] transition hover:-translate-y-1 hover:bg-[#f1d94c]"
          >
            Go to home
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-[#24A8E0]/30 bg-transparent px-7 py-3 text-sm font-semibold text-white transition hover:border-[#f1d94c] hover:text-[#f1d94c]"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
