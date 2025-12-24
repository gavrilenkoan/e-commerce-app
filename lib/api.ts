import { useAuthStore } from "@/store/auth.store";

export async function api<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T> {
    const token = useAuthStore.getState().user?.token;

    const res = await fetch(`https://dummyjson.com${endpoint}`, {
        ...options,
        headers: {
            ...(options.body && { "Content-Type": "application/json" }),
            ...(token && { Authorization: `Bearer ${token}` }),
            ...(options.headers || {}),
        },
    });

    if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
    }

    return res.json();
}
