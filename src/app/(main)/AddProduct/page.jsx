"use client";
import React, { useState } from "react";

function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "",
    price: "",
    quantity: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [imageLinks, setImageLinks] = useState([]);
  const [features, setFeatures] = useState([""]);

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    console.log("Cloudinary response:", data);

    if (!data.secure_url) {
      throw new Error("Image upload failed");
    }

    return data.secure_url;
  };

  const addFeature = () => {
    setFeatures((prev) => [...prev, ""]);
  };

  const removeFeature = (index) => {
    setFeatures((prev) => prev.filter((_, i) => i !== index));
  };

  const handleFeatureChange = (index, value) => {
    const updated = [...features];
    updated[index] = value;
    setFeatures(updated);
  };

  const addImageField = () => {
    if (imageLinks.length < 3) {
      setImageLinks([...imageLinks, ""]);
    }
  };

  const removeImageField = (index) => {
    setImageLinks(imageLinks.filter((_, i) => i !== index));
  };

  const handleImageChange = (index, value) => {
    const updated = [...imageLinks];
    updated[index] = value;
    setImageLinks(updated);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const payload = {
        ...formData,
        images: imageLinks.filter(Boolean),
        features: features.filter(Boolean),
      };

      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed");
      }

      setMessage("✅ Product added successfully");

      setFormData({
        name: "",
        description: "",
        type: "",
        price: "",
        quantity: "",
      });
      setFeatures([""]);
      setImageLinks([]);
    } catch (error) {
      console.error(error);
      setMessage("❌ Error adding product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f7fb] px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-semibold mb-2">Add Product</h2>
        <p className="text-gray-500 mb-8">
          Enter product details to add a new item
        </p>

        <form onSubmit={handleSubmit}>
          {/* TWO HALVES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* LEFT SIDE */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Product Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border px-4 py-3 bg-white focus:ring-2 focus:ring-black focus:outline-none"
                >
                  <option value="">Select Type</option>
                  <option value="oxygen concentrator">
                    Oxygen Concentrator
                  </option>
                  <option value="cpap">CPAP</option>
                  <option value="bipap">BiPAP</option>
                  <option value="mask">Mask</option>
                </select>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Price (₹)
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Product Features
                </label>

                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        placeholder={`Feature ${index + 1}`}
                        value={feature}
                        onChange={(e) =>
                          handleFeatureChange(index, e.target.value)
                        }
                        className="flex-1 rounded-lg border px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none"
                      />

                      {features.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeFeature(index)}
                          className="px-3 rounded-lg border text-sm"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={addFeature}
                  className="mt-3 text-sm font-medium underline"
                >
                  + Add another feature
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Product Images (Max 3)
                </label>

                <div className="grid grid-cols-3 gap-4">
                  {imageLinks.filter(Boolean).map((img, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={img}
                        alt="Preview"
                        className="h-24 w-full object-cover rounded-lg border"
                      />
                      <button
                        type="button"
                        onClick={() => removeImageField(index)}
                        className="absolute top-1 right-1 bg-black text-white text-xs rounded-full px-2 opacity-0 group-hover:opacity-100"
                      >
                        ✕
                      </button>
                    </div>
                  ))}

                  {imageLinks.length < 3 && (
                    <label className="h-24 flex items-center justify-center border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={async (e) => {
                          const file = e.target.files[0];
                          if (!file) return;

                          const url = await handleImageUpload(file);
                          setImageLinks((prev) => [...prev, url]);
                        }}
                      />
                      <span className="text-sm text-gray-500">+ Upload</span>
                    </label>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* SUBMIT */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-1/3 bg-black text-white py-3 rounded-xl text-lg font-medium hover:scale-[1.02] transition"
            >
              {loading ? "Adding Product..." : "Add Product"}
            </button>
          </div>

          {message && <p className="text-center text-sm mt-4">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
