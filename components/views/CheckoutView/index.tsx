"use client";

import { useCartStore } from "@/store/cart-store";
import styles from "./CheckoutPage.module.scss";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
    const router = useRouter();
    const { items, addItem, removeItem } = useCartStore();
    const total = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

    const handleCheckout = () => {
        const payload = JSON.stringify(items, null, 2);

        console.log("Checkout payload:");
        console.log(payload);

        router.push("/success");
    };

    if (items.length === 0) {
        return (
            <div className={styles.wrapper}>
                <h2 className={styles.empty}>Your cart is empty.</h2>
            </div>
        );
    }

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Checkout</h1>
            <div className={styles.card}>
                <h2 className={styles.summaryTitle}>Order Summary</h2>
                <div>
                    <ul className={styles.list}>
                        {items.map(i => (
                            <li key={i.id} className={styles.item}>
                                <div className={styles.itemRow}>
                                    <span>{i.title}</span>
                                    <span>${(i.price * i.quantity).toFixed(2)}</span>
                                </div>
                                <div className={styles.quantityRow}>
                                    <button onClick={() => removeItem(i.id)}>-</button>
                                    <span>{i.quantity}</span>
                                    <button onClick={() => addItem({ ...i, quantity: 1 })}>+</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.total}>
                        Total: ${total.toFixed(2)}
                    </div>
                </div>
            </div>
            <button
                className={styles.checkoutButton}
                onClick={handleCheckout}
            >
                Proceed to Payment
            </button>        </div>
    );
};

export default CheckoutPage;