"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth.store";
import { useCartStore } from "@/store/cart.store";

const CartPage = () => {
    const router = useRouter();
    const user = useAuthStore((s) => s.user);

    const { items, increase, decrease, removeItem, clear } =
        useCartStore();

    useEffect(() => {
        if (!user) {
            router.replace("/login");
        }
    }, [user, router]);

    if (!user) return null;

    const total = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    if (items.length === 0) {
        return <h1>Your cart is empty 🛒</h1>;
    }

    return (
        <div>
            <h1>Cart</h1>

            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <strong>{item.title}</strong>
                        <div>
                            <button onClick={() => decrease(item.id)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => increase(item.id)}>+</button>
                        </div>

                        <p>${item.price * item.quantity}</p>

                        <button onClick={() => removeItem(item.id)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>

            <hr />

            <h2>Total: ${total.toFixed(2)}</h2>

            <button onClick={clear}>Clear cart</button>
        </div>
    );
}

export default CartPage
