"use client";

import { useCartStore } from "@/store/cart-store"
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { useEffect, useState } from "react";
import styles from "./NavBar.module.scss";

export const NavBar = () => {

    const [mobileOpen, setMobileOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return window.removeEventListener("resize", handleResize);
    }, []);

    const { items } = useCartStore();
    const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">Store</Link>
            </div>
            <div className={styles.links}>
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
                <Link href="/checkout">Checkout</Link>
            </div>
            <div className={styles.actions}>
                <Link href="/checkout" className={styles.cart}>
                    <ShoppingCartIcon  className={styles.icon} />
                    {cartCount > 0 && (
                        <span className={styles.badge}>{cartCount}</span>
                    )}
                </Link>
                <button
                    className={styles.menuButton}
                    onClick={() => setMobileOpen((open) => !open)}
                >
                    {mobileOpen ? (
                        <XMarkIcon className={styles.icon} />
                    ) : (
                        <Bars3Icon className={styles.icon} />
                    )}
                </button>
            </div>
            {mobileOpen && (
                <div className={styles.mobileMenu}>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>    
                        </li>
                        <li>
                            <Link href="/products">Products</Link>    
                        </li>
                        <li>
                            <Link href="/checkout">Checkout</Link>    
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}