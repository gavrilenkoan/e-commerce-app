"use client";

import { useCartStore } from "@/store/cart-store";
import { Product } from "@/types/product";
import Image from "next/image"
import styles from "./ProductPage.module.scss";

const ProductPage = ({ product }: { product: Product }) => {

    const { items, addItem, removeItem } = useCartStore();
    const cartItem = items.find(i => i.id === product.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    const onAddItem = () => {
        addItem({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.images ? (product.images[0] ? product.images[0] : null) : null,
            quantity: 1,
        })
    }

    return (
        <div className={styles.container}>
            {product.images && product.images[0] && (
                <div className={styles.imageWrapper}>
                    <Image 
                        alt={product.title}
                        src={product.images[0]}
                        width={200}
                        height={200}
                        className={styles.image}
                    />
                </div>
            )}

            <div className={styles.infoSection}>
                <div>
                    <h2 className={styles.title}>{product.title}</h2>
                    <p className={styles.description}>{product.description}</p>
                </div>

                <div>
                    <h3 className={styles.price}>${product.price}</h3>
                    <div className={styles.quantity}>
                        <button onClick={() => removeItem(product.id)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={onAddItem}>+</button>
                    </div>
                </div>                
            </div>
        </div>
    )
};

export default ProductPage;