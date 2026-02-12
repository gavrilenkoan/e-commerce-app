import { api } from "@/lib/api";
import ProductCard from "@/components/common/ProductCard/ProductCard";
import styles from "./ProductsPage.module.scss";

type Product = {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
};

const ProductsPage = async () => {
    const data = await api<{ products: Product[] }>("/products?limit=0");

    return (
        <div className={styles.grid}>
            {data.products.map((p) => (
                <ProductCard
                    key={p.id}
                    id={p.id}
                    title={p.title}
                    price={p.price}
                    thumbnail={p.thumbnail}
                />
            ))}
        </div>
    );
}

// infinity (loader) scroll

export default ProductsPage