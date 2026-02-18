import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
    id: number;
    title: string;
    price: number;
    image: string | null;
    quantity: number;
}

interface CartStore {
    items: CartItem[];
    addItem: ((item: CartItem) => void);
    removeItem: ((id: number) => void);
    clearCart: (() => void);
}

export const useCartStore = create<CartStore>()(persist(set => ({
    items: [],
    addItem: (item) => set(state => {
        const isIncluded = state.items.find(i => i.id === item.id);

        if (isIncluded) {
            return {
                items: state.items.map(i => 
                    i.id === item.id 
                        ? { ...i, quantity: i.quantity + item.quantity } 
                        : i),
            };
        }

        return { items: [...state.items, item] };
    }),
    removeItem: (id) => set(state => {
        return { 
            items: state.items.map(i => 
                i.id === id ? { ...i, quantity: i.quantity - 1 } : i
            ).filter(i => i.quantity > 0) 
        }
    }),
    clearCart: () => set(() => {
        return { items: [] }
    })
}), {name: "cart"}));