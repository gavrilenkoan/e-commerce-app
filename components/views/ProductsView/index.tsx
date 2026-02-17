import { ProductsList } from "@/components/common/ProductsList/ProductsList";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

const ProductsPage = async () => {

    const res = await fetch("https://dummyjson.com/products", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }

    const data: { products: Product[] } = await res.json();
    const products = data.products;

    return (
        <div>
            <h1>All Products</h1>
            <ProductsList products={products}/>
        </div>
    );
};

export default ProductsPage;