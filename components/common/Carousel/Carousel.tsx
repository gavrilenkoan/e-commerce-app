"use client";

import { Product } from "@/types/product"
import { useEffect, useState } from "react"
import Image from "next/image";
import styles from "./Carousel.module.scss";

export const Carousel = ({ products }: { products: Product[]}) => {

    const [current, setCurrent] = useState<number>(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrent(c => (c + 1) % products.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [products.length]);

    const currentProduct = products[current];

    return (
        <div className={styles.carousel}>
            <div className={styles.imageWrapper}>
                {currentProduct.images && currentProduct.images[0] && (
                    <div className={styles.imageWrapper}>
                        <Image
                            src={currentProduct.images[0]}
                            alt={currentProduct.title}
                            fill
                            className={styles.bgImage}
                            priority
                        />
                        <div className={styles.overlay} />
                    </div>
                )}
            </div>

            <div className={styles.info}>
                <h3>{currentProduct.title}</h3>
                <h2>${currentProduct.price}</h2>
            </div>
        </div>
    );
}