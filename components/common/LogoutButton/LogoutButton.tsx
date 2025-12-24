"use client";

import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth.store";

const LogoutButton = () => {
    const logout = useAuthStore((s) => s.logout);
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push("/login");
    };

    return <button onClick={handleLogout}>Logout</button>;
}

export default LogoutButton