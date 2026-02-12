"use client";

import Link from "next/link";
import { useAuthStore } from "@/store/auth.store";
import LogoutButton from "../LogoutButton/LogoutButton";
import styles from "./Header.module.scss";

const Header = () => {
    const user = useAuthStore((state) => state.user);

    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                Store
            </Link>

            <nav className={styles.nav}>
                {user ? (
                    <>
                        <Link href="/profile" className={styles.link}>
                            Profile
                        </Link>

                        <Link href="/cart" className={styles.link}>
                            Cart
                        </Link>

                        <LogoutButton />
                    </>
                ) : (
                    <Link href="/login" className={`${styles.link} ${styles.primary}`}>
                        Login
                    </Link>
                )}
            </nav>
        </header>
    );
};

export default Header;
