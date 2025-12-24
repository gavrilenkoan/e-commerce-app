import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
    thumbnail?: string;
}

interface CartState {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: number) => void;
    increase: (id: number) => void;
    decrease: (id: number) => void;
    clear: () => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            items: [],

            addItem: (item) =>
                set((state) => {
                    const existing = state.items.find((i) => i.id === item.id);
                    if (existing) {
                        return {
                            items: state.items.map((i) =>
                                i.id === item.id
                                    ? { ...i, quantity: i.quantity + item.quantity }
                                    : i
                            ),
                        };
                    }
                    return { items: [...state.items, item] };
                }),

            removeItem: (id) =>
                set((state) => ({
                    items: state.items.filter((i) => i.id !== id),
                })),

            increase: (id) =>
                set((state) => ({
                    items: state.items.map((i) =>
                        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
                    ),
                })),

            decrease: (id) =>
                set((state) => ({
                    items: state.items
                        .map((i) =>
                            i.id === id
                                ? { ...i, quantity: i.quantity - 1 }
                                : i
                        )
                        .filter((i) => i.quantity > 0),
                })),

            clear: () => set({ items: [] }),
        }),
        { name: "cart-storage" }
    )
);
