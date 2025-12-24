import { api } from "@/lib/api";

type Product = {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
};

const ProductsPage = async () => {
    const data = await api<{ products: Product[] }>("/products");

    return (
        <div>
            {data.products.map((p) => (
                <div key={p.id}>
                    <img src={p.thumbnail} />
                    <h3>{p.title}</h3>
                    <p>${p.price}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductsPage