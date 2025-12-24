import { api } from "./api";

interface LoginResponse {
    id: number;
    username: string;
    email: string;
    token: string;
}

export async function login(username: string, password: string) {
    return api<LoginResponse>("/auth/login", {
        method: "POST",
        body: JSON.stringify({
            username,
            password,
        }),
    });
}