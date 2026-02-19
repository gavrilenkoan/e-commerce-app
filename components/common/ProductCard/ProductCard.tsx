import { Product } from "@/types/product"
import Link from "next/link"
import Image from "next/image"
import styles from "./ProductCard.module.scss";

export const ProductCard = ({ product }: { product: Product}) => {
    return (
        <Link href={`/products/${product.id}`} className={styles.card}>
            <div className={styles.content}>
                {product.images && product.images[0] && (
                    <div className={styles.imageWrapper}>
                        <Image 
                            alt={product.title}
                            src={product.images[0]}
                            width={200}
                            height={200}
                        />
                    </div>
                )}

                <div>
                    <h2 className={styles.title}>{product.title}</h2>
                </div>

                <div>
                    <p className={styles.description}>{product.description}</p>
                    <h3 className={styles.price}>${product.price}</h3>
                </div>

                <span className={styles.button}>
                    View Details
                </span>
            </div>
        </Link>
    )
}