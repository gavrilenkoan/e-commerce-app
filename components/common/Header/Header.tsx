"use client";

import Link from "next/link";
import { useAuthStore } from "@/store/auth.store";
import LogoutButton from "../LogoutButton/LogoutButton";

const Header = () => {
    const user = useAuthStore((state) => state.user);

    return (
        <header>
            <Link href="/">Store</Link>

            {user ? (
                <>
                    <Link href="/profile">Profile</Link>
                    <Link href="/cart">Cart</Link>
                    <LogoutButton />
                </>
            ) : (
                <Link href="/login">Login</Link>
            )}
        </header>
    );
}

export default Header
