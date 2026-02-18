"use client";

import { useCartStore } from "@/store/cart-store";
import { Product } from "@/types/product";
import Image from "next/image"

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
        <div>
            {product.images && product.images[0] && (
                <div>
                    <Image 
                        alt={product.title}
                        src={product.images[0]}
                        width={200}
                        height={200}
                    />
                </div>
            )}

            <div>
                <h2>{product.title}</h2>
            </div>

            <div>
                <p>{product.description}</p>
                <h3>${product.price}</h3>
            </div>

            <div>
                <button onClick={() => removeItem(product.id)}>-</button>
                <span>{quantity}</span>
                <button onClick={onAddItem}>+</button>
            </div>
        </div>
    )
};

export default ProductPage;