"use client";

import { useCartStore } from "@/store/cart-store";
import Link from "next/link";
import { useEffect } from "react";
import styles from "./SuccessPage.module.scss";

const SuccessPage = () => {
    const { clearCart } = useCartStore();

    useEffect(() => {
        clearCart();
    }, [clearCart]);

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.icon}>✓</div>
                <h1 className={styles.title}>Payment successful!</h1>
                <p className={styles.text}>
                    Thank you for your purchase. Your order is being processed.
                </p>
                <Link href="/" className={styles.btn}>
                    Continue Shopping
                </Link>
            </div>
        </div>
    );
};

export default SuccessPage;