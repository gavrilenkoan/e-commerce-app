"use client";

import { Pagination } from "@/components/common/Pagination/Pagination";
import { ProductsList } from "@/components/common/ProductsList/ProductsList";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";

const LIMIT = 30;

const ProductsPage = () => {

    const [page, setPage] = useState(1);
    const [products, setProducts] = useState<Product[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);

            const skip = (page - 1) * LIMIT;

            const res = await fetch(
                `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`
            );

            if (!res.ok) {
                throw new Error("Failed to fetch products");
            }

            const data: {
                products: Product[];
                total: number;
            } = await res.json();

            setProducts(data.products);
            setTotalPages(Math.ceil(data.total / LIMIT));
            setLoading(false);
        };

        fetchProducts();
    }, [page]);

    return (
        <div>
            <h1>All Products</h1>

            <input type="text" placeholder="Search products..." />

            {loading ? (
                <p>Loading...</p>
            ) : (
                <ProductsList products={products} />
            )}

            <Pagination
                page={page}
                totalPages={totalPages}
                onPageChange={setPage}
            />
        </div>
    );
};

export default ProductsPage;