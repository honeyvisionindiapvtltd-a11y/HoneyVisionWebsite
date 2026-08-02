import { useEffect, useState } from "react";
import { authApi, ApiError } from "../../services/api";
import cloudinaryMap from "../../utils/cloudinary_map.json";

const getProductImageUrl = (slug) => {
  const mapping = {
    "ai-cctv-cameras": cloudinaryMap["products\\ai-camera.jpg"],
    "ip-camera-systems": cloudinaryMap["products\\nvr.jpg"],
    "audiovisual-systems": cloudinaryMap["products\\audio.jpg"],
    "agricultural-ai-drones": cloudinaryMap["products\\ai-edge.jpg"],
    "access-control": cloudinaryMap["products\\access-control.jpg"],
  };
  return mapping[slug] || cloudinaryMap["products\\productshero.jpg"];
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ title: "", slug: "", subtitle: "", description: "", features: "", price: 0, images: [], imageUrl: "", published: true });
  const [editingProductId, setEditingProductId] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await authApi.request("/admin/products");
      const uniqueProducts = Array.from(
        new Map((data.products || []).map((item) => [item.slug, item])).values()
      );
      setProducts(uniqueProducts);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to load products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const resetForm = () => {
    setForm({ title: "", slug: "", subtitle: "", description: "", features: "", price: 0, images: [], imageUrl: "", published: true });
    setEditingProductId(null);
    setImagePreview("");
    setError("");
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const imageData = reader.result;
      setForm((prev) => ({ ...prev, images: [imageData], imageUrl: "" }));
      setImagePreview(imageData);
    };
    reader.readAsDataURL(file);
  };

  const handleImageUrlChange = (event) => {
    const imageUrl = event.target.value;
    setForm((prev) => ({ ...prev, images: imageUrl ? [imageUrl] : [], imageUrl }));
    setImagePreview(imageUrl);
  };

  const normalizeFeatures = (featuresString) => {
    return featuresString
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  };

  const saveProduct = async () => {
    if (!form.title || !form.slug) {
      setError("Please provide both title and slug.");
      return;
    }

    try {
      const payload = {
        title: form.title,
        slug: form.slug,
        subtitle: form.subtitle,
        description: form.description,
        features: normalizeFeatures(form.features),
        price: form.price,
        images: form.images.filter(Boolean),
        published: Boolean(form.published),
      };

      if (editingProductId) {
        await authApi.request(`/admin/products/${editingProductId}`, {
          method: "PUT",
          body: JSON.stringify(payload),
        });
      } else {
        await authApi.request("/admin/products", {
          method: "POST",
          body: JSON.stringify(payload),
        });
      }
      resetForm();
      fetchProducts();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to save product.");
    }
  };

  const editProduct = (product) => {
    const firstImage = Array.isArray(product.images) && product.images.length > 0 ? product.images[0] : "";
    setEditingProductId(product._id);
    setForm({
      title: product.title || "",
      slug: product.slug || "",
      subtitle: product.subtitle || "",
      description: product.description || "",
      features: Array.isArray(product.features) ? product.features.join(", ") : product.features || "",
      price: product.price || 0,
      images: firstImage ? [firstImage] : [],
      imageUrl: firstImage,
      published: product.published ?? true,
    });
    setImagePreview(firstImage || getProductImageUrl(product.slug));
    setError("");
  };

  const deleteProduct = async (id) => {
    try {
      await authApi.request(`/admin/products/${id}`, { method: "DELETE" });
      if (editingProductId === id) resetForm();
      fetchProducts();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to delete product.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-[#0f1118] p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold">{editingProductId ? "Edit product" : "Create product"}</h3>
            <p className="text-sm text-gray-400">Manage your catalog from here.</p>
          </div>
          <button
            type="button"
            onClick={resetForm}
            className="rounded-full border border-[#24A8E0]/30 bg-[#111015] px-4 py-2 text-sm text-white hover:bg-[#24A8E0]/10"
          >
            Reset
          </button>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Title"
            className="rounded-3xl border border-[#2f3a4a] bg-[#111015] px-4 py-3 text-white focus:border-[#24A8E0] focus:outline-none"
          />
          <input
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
            placeholder="Slug"
            className="rounded-3xl border border-[#2f3a4a] bg-[#111015] px-4 py-3 text-white focus:border-[#24A8E0] focus:outline-none"
          />
          <input
            value={form.subtitle}
            onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
            placeholder="Subtitle"
            className="rounded-3xl border border-[#2f3a4a] bg-[#111015] px-4 py-3 text-white focus:border-[#24A8E0] focus:outline-none"
          />
          <input
            value={form.features}
            onChange={(e) => setForm({ ...form, features: e.target.value })}
            placeholder="Features (comma separated)"
            className="rounded-3xl border border-[#2f3a4a] bg-[#111015] px-4 py-3 text-white focus:border-[#24A8E0] focus:outline-none"
          />
          <input
            type="number"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
            placeholder="Price"
            className="rounded-3xl border border-[#2f3a4a] bg-[#111015] px-4 py-3 text-white focus:border-[#24A8E0] focus:outline-none"
          />
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Description"
            className="col-span-2 min-h-30 rounded-3xl border border-[#2f3a4a] bg-[#111015] px-4 py-3 text-white focus:border-[#24A8E0] focus:outline-none"
          />
          <label className="flex items-center gap-3 rounded-3xl border border-[#2f3a4a] bg-[#111015] px-4 py-3 text-sm text-white">
            <input
              type="checkbox"
              checked={form.published}
              onChange={(e) => setForm({ ...form, published: e.target.checked })}
              className="h-5 w-5 rounded border-gray-600 bg-[#0f1118] text-[#24A8E0] focus:ring-[#24A8E0]"
            />
            <span>Published</span>
          </label>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <label className="block rounded-3xl border border-[#2f3a4a] bg-[#111015] p-4 text-sm text-white">
            <span className="block text-gray-400">Upload local image</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-3 w-full rounded-3xl bg-[#0f1118] px-3 py-2 text-sm text-white"
            />
          </label>

          <label className="block rounded-3xl border border-[#2f3a4a] bg-[#111015] p-4 text-sm text-white">
            <span className="block text-gray-400">Cloudinary / remote image URL</span>
            <input
              type="url"
              value={form.imageUrl}
              placeholder="https://example.com/image.jpg"
              onChange={handleImageUrlChange}
              className="mt-3 w-full rounded-3xl bg-[#0f1118] px-3 py-2 text-sm text-white focus:outline-none"
            />
          </label>

          {imagePreview && (
            <div className="rounded-3xl border border-[#2f3a4a] bg-[#111015] p-4">
              <p className="text-sm text-gray-400">Preview</p>
              <img src={imagePreview} alt="Preview" className="mt-3 h-40 w-full rounded-3xl object-cover" />
            </div>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            onClick={saveProduct}
            className="rounded-full bg-[#24A8E0] px-6 py-3 font-semibold text-black transition hover:bg-[#1bb4ff]"
          >
            {editingProductId ? "Save changes" : "Create product"}
          </button>
          {editingProductId && (
            <button
              type="button"
              onClick={resetForm}
              className="rounded-full border border-[#24A8E0] px-6 py-3 text-sm text-[#24A8E0] hover:bg-[#24A8E0]/10"
            >
              Cancel edit
            </button>
          )}
        </div>

        {error && (
          <div className="mt-4 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </div>
        )}
      </div>

      <div className="rounded-3xl bg-[#0f1118] p-6">
        <h3 className="text-lg font-semibold">Product catalog</h3>
        {loading ? (
          <p className="mt-4 text-gray-400">Loading products...</p>
        ) : (
          <div className="mt-4 space-y-3">
            {products.length === 0 ? (
              <p className="text-gray-400">No products found.</p>
            ) : (
              products.map((product) => (
                <div key={product._id} className="rounded-3xl border border-[#24A8E0]/10 bg-[#111015] p-4 shadow-sm">
                  <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
                    <div>
                      <div className="text-lg font-semibold text-white">{product.title}</div>
                      <div className="mt-1 text-sm text-gray-400">{product.description || "No description provided."}</div>
                      <div className="mt-2 text-sm text-gray-300">Slug: {product.slug || "-"}</div>
                      <div className="mt-1 text-sm text-gray-300">Price: ₹{product.price ?? 0}</div>
                    </div>
                    <div className="flex flex-col items-end gap-3">
                      <img
                        src={product.images?.[0] || getProductImageUrl(product.slug)}
                        alt={product.title}
                        className="h-24 w-24 rounded-3xl object-cover"
                      />
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => editProduct(product)}
                          className="rounded-full border border-[#24A8E0] px-4 py-2 text-sm text-[#24A8E0] hover:bg-[#24A8E0]/10"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteProduct(product._id)}
                          className="rounded-full border border-red-500 px-4 py-2 text-sm text-red-300 hover:bg-red-500/10"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
