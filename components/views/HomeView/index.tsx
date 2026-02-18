import { Carousel } from "@/components/common/Carousel/Carousel";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import styles from "./HomePage.module.scss";

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
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.textBlock}>
                        <h2>Welcome to The Store</h2>
                        <p>Discover the latest products at the best prices.</p>
                        <Link href="/products" className={styles.cta}>Browse All Products</Link>
                    </div>
                    <div className={styles.heroImage}>
                        <Image 
                            alt = "Banner Image"
                            width={450}
                            height={450}
                            src={products[0].images[0]}
                        />
                    </div>
                </div>
            </section>
            <section className={styles.carouselSection}>
                <Carousel products={products}/>
            </section>
        </div>
    );
};

export default HomePage;