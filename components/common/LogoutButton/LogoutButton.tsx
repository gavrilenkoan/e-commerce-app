"use client";

import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth.store";
import styles from "./LogoutButton.module.scss";

const LogoutButton = () => {
    const logout = useAuthStore((s) => s.logout);
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push("/login");
    };

    return (
        <button className={styles.button} onClick={handleLogout}>
            Logout
        </button>
    );
};

export default LogoutButton;
