"use client";

import { useAuthStore } from "@/store/auth.store";
import { useCartStore } from "@/store/cart.store";

interface Props {
    product: any;
}

const ProductView = ({ product }: Props) => {
    const user = useAuthStore((s) => s.user);
    const addItem = useCartStore((s) => s.addItem);

    const handleAddToCart = () => {
        addItem({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: 1,
            thumbnail: product.thumbnail,
        });
    };

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.description}</p>
            <p>${product.price}</p>

            {user ? (
                <button onClick={handleAddToCart}>
                    Add to cart
                </button>
            ) : (
                <p>Login to add this product to cart</p>
            )}
        </div>
    );
}

export default ProductView
