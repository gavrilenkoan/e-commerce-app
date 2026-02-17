"use client";

import { Product } from "@/types/product"
import { useEffect, useState } from "react"
import Image from "next/image";

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
        <div>
            {currentProduct.images && currentProduct.images[0] && (
                <div>
                    <Image 
                        alt={currentProduct.title}
                        src={currentProduct.images[0]}
                        width={200}
                        height={200}
                    />
                </div>
            )}
            <div>
                <h3>{currentProduct.title}</h3>
                <h2>${currentProduct.price}</h2>
            </div>
        </div>
    );
}