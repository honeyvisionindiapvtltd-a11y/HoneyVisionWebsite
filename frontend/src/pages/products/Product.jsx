import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { productApi } from "../../services/api";
import cloudinaryMap from "../../utils/cloudinary_map.json";
import "./Product.css";

const staticProductImages = {
   "ai-cctv-cameras": [
    "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785669789/WhatsApp_Image_2026-08-02_at_4.51.47_PM_1_gj18mu.jpg",
    "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785669800/WhatsApp_Image_2026-08-02_at_4.51.46_PM_nrqqxs.jpg",
    "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785669793/WhatsApp_Image_2026-08-02_at_4.51.47_PM_bsf22n.jpg",
    "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785669785/WhatsApp_Image_2026-08-02_at_4.51.47_PM_2_lqjufx.jpg",
    "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785669785/WhatsApp_Image_2026-08-02_at_4.51.47_PM_2_lqjufx.jpg",
    "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785632653/aicamera3_b4jkdo.jpg",
  ],
  "ip-camera-systems": [
    "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785632660/ipcamera3_ggvrp7.jpg",
    "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785632661/ipcamera1_yg4hbb.jpg",
    "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785632660/ipcamrea2_tvoocu.jpg",
    "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785632661/ipcamera_lmgnsd.jpg",
    "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387971/ai-camera_n5rnmd.jpg",
  ],
  "audiovisual-systems": [
    "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785632656/audiovideo_c5swgc.jpg",
    "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387986/networking_tvfsu0.jpg",
    "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785632655/audiovideo2_p1tjsy.jpg",
    "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785632656/audiovideo_c5swgc.jpg",
    "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387977/audio_lzakdm.jpg",
  ],
  "agricultural-ai-drones": [
    "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785632658/drone1_hk0x1u.jpg",
    "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785632658/drone3_ozbqoq.jpg",
    "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785632659/drone2_n4bzei.jpg",
    "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785632657/drone5_va6qh2.jpg",
    "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785632658/drone4_hxyeop.jpg",
    "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387986/networking_tvfsu0.jpg",
  ],
  "access-control": [
    "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785387968/access-control_oap9uv.jpg",
    "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785632653/control2_aej1yp.jpg",
    "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785632653/control3_ebgahu.jpg",
    "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785632655/control1_xmxdr3.jpg",
    "https://res.cloudinary.com/q6iqvtbe/image/upload/v1785632655/control1_xmxdr3.jpg",
  ],
};

const getProductImageUrl = (product) => {
  const slug = product?.slug;
  const mappedImages = staticProductImages[slug];

  if (mappedImages && mappedImages.length > 0) {
    return mappedImages[0];
  }

  if (product?.images?.length > 0 && typeof product.images[0] === "string") {
    return product.images[0];
  }

  return cloudinaryMap["products\\productshero.jpg"];
};

const getProductGallery = (product) => {
  const slug = product?.slug;
  const mappedImages = staticProductImages[slug] || [];
  const backendImages = Array.isArray(product?.images)
    ? product.images.filter((img) => typeof img === "string")
    : [];

  if (mappedImages.length > 0) {
    return Array.from(new Set([...mappedImages, ...backendImages]));
  }

  if (backendImages.length > 0) {
    return backendImages;
  }

  return [getProductImageUrl(product)];
};

const ProductCard = ({ product, idx }) => {
  const galleryImages = getProductGallery(product).slice(0, 3);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handlePrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <Link
      key={product.slug}
      to={`/product/${product.slug}`}
      className={`group product-card overflow-hidden rounded-4xl border border-white/10 bg-[#0f172a] transition duration-500 hover:-translate-y-1 hover:shadow-xl`}
      style={{ transitionDelay: `${idx * 60}ms` }}
    >
      <div className="relative overflow-hidden h-72">
        <img
          src={galleryImages[activeImageIndex]}
          alt={`${product.title} ${activeImageIndex + 1}`}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-transparent" />
        <div className="product-info absolute left-5 top-5 rounded-md bg-black/40 px-3 py-2 text-white backdrop-blur-sm">
          <p className="text-sm font-semibold">{product.title}</p>
        </div>
        {galleryImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
            >
              ›
            </button>
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              {galleryImages.map((_, imageIdx) => (
                <span
                  key={imageIdx}
                  className={`h-2 w-2 rounded-full ${imageIdx === activeImageIndex ? "bg-[#F1CF45]" : "bg-white/40"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-8">
        <p className="text-sm uppercase tracking-[4px] text-[#24A8E0]">Product</p>
        <h2 className="mt-4 text-2xl font-semibold text-white">{product.title}</h2>
        <p className="mt-4 text-gray-300 leading-7 line-clamp-3">{product.description}</p>
        <div className="mt-6 flex items-center justify-between">
          <div className="text-[#24A8E0] font-semibold transition group-hover:text-[#F1CF45]">
            Learn More
          </div>
          <div className="ml-4">
            <span className="inline-flex items-center rounded-full bg-[#24A8E0] px-3 py-2 text-sm font-semibold text-black">Explore</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await productApi.list();
        setProducts(data.products || []);
      } catch (err) {
        setError(err?.message || "Failed to load products.");
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  return (
    <>
      <Navbar />

      <section className="bg-[#0b1220] text-white pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <p className="uppercase tracking-[6px] text-[#24A8E0] font-semibold">
              Our Products
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mt-5">
              Intelligent Products for a <span className="text-[#F1CF45]">Smarter World</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300 leading-8">
              Honey Vision delivers advanced surveillance, AI, networking, and AV products built for secure, connected operations across cities, industry, and enterprise.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {loading ? (
              <div className="col-span-full rounded-3xl border border-[#24A8E0]/20 bg-[#11151f] p-10 text-center text-gray-400">
                Loading products...
              </div>
            ) : error ? (
              <div className="col-span-full rounded-3xl border border-red-500/20 bg-[#11151f] p-10 text-center text-red-300">
                {error}
              </div>
            ) : products.length === 0 ? (
              <div className="col-span-full rounded-3xl border border-[#24A8E0]/20 bg-[#11151f] p-10 text-center text-gray-400">
                No products available.
              </div>
            ) : (
              products.map((product, idx) => (
                <ProductCard key={product.slug} product={product} idx={idx} />
              ))
            )}
          </div>

          <div className="mt-24 grid gap-8 lg:grid-cols-2">
            <div className="rounded-4xl border border-[#24A8E0]/20 bg-[#11151f] p-10 shadow-[0_35px_90px_-60px_rgba(36,168,224,0.7)]">
              <h2 className="text-4xl font-bold">Why HoneyVision Products?</h2>
              <p className="mt-6 text-gray-300 leading-8">
                Our portfolio combines AI-powered cameras, secure storage, intelligent edge compute, and professional AV solutions to help you build resilient, scalable surveillance and smart infrastructure systems.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-[#24A8E0]/20 bg-[#0f172a] p-8 text-center">
                <p className="text-5xl font-bold text-[#F1CF45]">AI</p>
                <p className="mt-3 text-gray-300">Smart analytics and automation</p>
              </div>
              <div className="rounded-3xl border border-[#24A8E0]/20 bg-[#0f172a] p-8 text-center">
                <p className="text-5xl font-bold text-[#F1CF45]">24×7</p>
                <p className="mt-3 text-gray-300">Continuous monitoring and alerts</p>
              </div>
              <div className="rounded-3xl border border-[#24A8E0]/20 bg-[#0f172a] p-8 text-center">
                <p className="text-5xl font-bold text-[#F1CF45]">Secure</p>
                <p className="mt-3 text-gray-300">End-to-end device and data protection</p>
              </div>
              <div className="rounded-3xl border border-[#24A8E0]/20 bg-[#0f172a] p-8 text-center">
                <p className="text-5xl font-bold text-[#F1CF45]">Modular</p>
                <p className="mt-3 text-gray-300">Flexible deployment for any environment</p>
              </div>
            </div>
          </div>

          <div className="mt-24 rounded-4xl border border-[#24A8E0]/20 bg-[#11151f] p-14 text-center shadow-[0_35px_90px_-60px_rgba(36,168,224,0.75)]">
            <h2 className="text-4xl font-bold text-white">Built for modern operations</h2>
            <p className="mx-auto mt-6 max-w-3xl text-gray-300 leading-8">
              From command centers to campus security, HoneyVision product solutions give you the hardware, software, and connectivity needed to deliver faster response, higher uptime, and smarter insights.
            </p>
            <Link
              to="/demo"
              className="mt-10 inline-flex rounded-full bg-[#F1CF45] px-10 py-4 text-sm font-semibold text-[#111015] transition hover:bg-[#24A8E0] hover:text-white"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
