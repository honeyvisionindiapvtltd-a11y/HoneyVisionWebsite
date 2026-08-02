import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { productApi } from "../../services/api";
import { productDetails } from "./productData";
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

const getProductGalleryImages = (product) => {
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

const ProductDetail = ({ slug: slugProp }) => {
  const { slug: slugParam } = useParams();
  const slug = slugProp || slugParam;
  const [product, setProduct] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await productApi.get(slug);
        setProduct(data.product);
      } catch (err) {
        setError(err.message || "Failed to load product.");
      } finally {
        setLoading(false);
      }
    };
    if (slug) loadProduct();
  }, [slug]);

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [product?.slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0b0f15] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl rounded-[28px] border border-[#24A8E0]/10 bg-[#0f172a]/60 p-6 text-center text-gray-400">
          Loading product details...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0b0f15] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl rounded-[28px] border border-red-500/20 bg-[#0f172a]/60 p-6 text-center text-red-300">
          {error}
        </div>
      </div>
    );
  }

  if (!product) {
    return <Navigate to="/product" replace />;
  }

  const galleryImages = getProductGalleryImages(product);
  const selectedImage = galleryImages[selectedImageIndex] || galleryImages[0];
  const subtitle = product.subtitle || product.description?.slice(0, 80) || "Discover product details and features.";
  const defaultProductMeta = productDetails[slug] || {};
  const productFeatures = Array.isArray(product.features) ? product.features : [];
  const fallbackFeatures = Array.isArray(defaultProductMeta.features) ? defaultProductMeta.features : [];
  const features = Array.from(new Set([
    ...productFeatures,
    ...fallbackFeatures,
  ]));
  if (features.length === 0) {
    features.push(
      "High-quality product imagery",
      "Secure deployment and monitoring",
      "AI-enabled analytics",
      "Enterprise-ready infrastructure"
    );
  }

  return (
    <section className="min-h-screen bg-[#0b0f15] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl rounded-[28px] border border-[#24A8E0]/10 bg-[#0f172a]/60 p-6 shadow-[0_40px_90px_-60px_rgba(36,168,224,0.7)] sm:p-10">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[6px] text-[#24A8E0]">Product Detail</p>
            <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{product.title}</h1>
            <p className="mt-3 max-w-3xl text-md text-gray-300">{subtitle}</p>
          </div>
          <Link
            to="/product"
            className="inline-flex items-center rounded-full border border-[#24A8E0] bg-transparent px-5 py-2 text-sm font-semibold text-[#24A8E0] transition hover:bg-[#24A8E0] hover:text-black"
          >
            Back to Products
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-[20px] bg-black/20">
            <div className="relative overflow-hidden bg-black/10">
              <img src={selectedImage} alt={`${product.title} image`} className="w-full object-cover h-[28rem] sm:h-[32rem]" />
            </div>
            {galleryImages.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3 px-4 sm:px-6">
                {galleryImages.slice(0, 4).map((url, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative overflow-hidden rounded-3xl border-2 ${selectedImageIndex === idx ? "border-[#F1CF45]" : "border-transparent"} focus:outline-none`}
                  >
                    <img src={url} alt={`${product.title} ${idx + 1}`} className="h-24 w-full object-cover" />
                    {idx === 3 && galleryImages.length > 4 && (
                      <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-black/60 text-sm font-semibold text-white">
                        +{galleryImages.length - 4}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
            <div className="p-8">
              <p className="text-lg leading-8 text-gray-300">{product.description || "No additional details are available for this product."}</p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                <div className="rounded-3xl border border-[#24A8E0]/20 bg-[#0f172a] p-6">
                  <p className="text-sm uppercase tracking-[3px] text-[#24A8E0]">Price</p>
                  <p className="mt-3 text-base text-gray-300 leading-7">₹{product.price ?? 0}</p>
                </div>
                <div className="rounded-3xl border border-[#24A8E0]/20 bg-[#0f172a] p-6">
                  <p className="text-sm uppercase tracking-[3px] text-[#24A8E0]">Slug</p>
                  <p className="mt-3 text-base text-gray-300 leading-7">{product.slug}</p>
                </div>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {features.map((feature, index) => (
                  <div key={index} className="rounded-3xl border border-[#24A8E0]/20 bg-[#0f172a] p-6">
                    <p className="text-sm uppercase tracking-[3px] text-[#24A8E0]">Feature</p>
                    <p className="mt-3 text-base text-gray-300 leading-7">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="rounded-[20px] border border-[#24A8E0]/10 bg-[#11151f] p-6 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-[#24A8E0]/20 p-3 text-[#24A8E0]">P</div>
              <div>
                <p className="text-sm text-gray-300">Product</p>
                <p className="font-semibold text-white">{product.title}</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-300">Features</p>
              <ul className="mt-3 list-disc list-inside text-gray-300">
                {features.slice(0, 3).map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <Link to="/demo" className="w-full inline-flex justify-center rounded-lg bg-[#F1CF45] px-6 py-3 text-sm font-bold text-black hover:bg-[#24A8E0]">
                Request a Demo
              </Link>
              <Link to="/contact" className="mt-3 block text-center text-sm text-gray-300 underline">Contact Sales</Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
