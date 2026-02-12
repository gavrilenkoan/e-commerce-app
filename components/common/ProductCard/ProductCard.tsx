"use client";

import Link from "next/link";
import styles from "./ProductCard.module.scss";

type ProductCardProps = {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
};

const ProductCard = ({ id, title, price, thumbnail }: ProductCardProps) => {
    return (
        <Link href={`/products/${id}`} className={styles.card}>
            <img
                src={thumbnail}
                alt={title}
                className={styles.image}
            />

            <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.price}>${price}</p>
            </div>
        </Link>
    );
};

export default ProductCard;
