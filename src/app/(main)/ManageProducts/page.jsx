"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GoPlus } from "react-icons/go";

function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">All Products</h1>

        <Link
          href="/AddProduct"
          className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full hover:bg-[#0077b6] transition"
        >
          <GoPlus className="text-xl" />
          Add Product
        </Link>
      </div>

      {/* CONTENT */}
      {loading ? (
        <p className="text-gray-500">Loading products...</p>
      ) : products.length === 0 ? (
        <p className="text-gray-500">No products added yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="group bg-white rounded-2xl border shadow-sm hover:shadow-xl transition overflow-hidden"
            >
              {/* IMAGE */}
              <div className="relative h-48 w-full bg-gray-100">
                {product.images?.[0] ? (
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
              </div>

              {/* DETAILS */}
              <div className="p-5 space-y-2">
                <h3 className="font-semibold text-lg line-clamp-1">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-500 capitalize">
                  {product.type}
                </p>

                <div className="flex justify-between items-center pt-3">
                  <span className="font-bold text-lg">
                    ₹{product.price}
                  </span>

                  <span className="text-sm text-gray-500">
                    Qty: {product.quantity}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ManageProducts;

