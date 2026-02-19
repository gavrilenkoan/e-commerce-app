"use client";

import { Pagination } from "@/components/common/Pagination/Pagination";
import { ProductsList } from "@/components/common/ProductsList/ProductsList";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import styles from "./ProductsPage.module.scss";

const LIMIT = 30;

const ProductsPage = () => {

    const [page, setPage] = useState(1);
    const [products, setProducts] = useState<Product[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);

    const [query, setQuery] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);

            const skip = (page - 1) * LIMIT;

            const baseUrl = searchTerm
                ? `https://dummyjson.com/products/search?q=${searchTerm}&limit=${LIMIT}&skip=${skip}`
                : `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`;

            const res = await fetch(baseUrl);

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
    }, [page, searchTerm]);

    const handleSearch = () => {
        setPage(1);
        setSearchTerm(query);
    };

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>All Products</h1>

            <div className={styles.searchBar}>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={handleSearch}>
                    Search
                </button>
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : products.length === 0 ? (
                <p>No results</p>
            ) : (
                <ProductsList products={products} />
            )}

            {totalPages > 1 && (
                <Pagination
                    page={page}
                    totalPages={totalPages}
                    onPageChange={setPage}
                />
            )}
        </div>
    );
};

export default ProductsPage;