import { Carousel } from "@/components/common/Carousel/Carousel";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

const HomePage = async () => {

    const res = await fetch("https://dummyjson.com/products?limit=5", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }

    const data: { products: Product[] } = await res.json();
    const products = data.products;

    return (
        <div>
            <section>
                <div>
                    <div>
                        <h2>Welcome to The Store</h2>
                        <p>Discover the latest products at the best prices.</p>
                        <Link href="/products">Browse All Products</Link>
                    </div>
                    <Image 
                        alt = "Banner Image"
                        width={450}
                        height={450}
                        src={products[0].images[0]}
                    />
                </div>
            </section>
            <section><Carousel products={products}/></section>
        </div>
    );
};

export default HomePage;