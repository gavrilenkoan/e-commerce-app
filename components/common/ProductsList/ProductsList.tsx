import { Product } from "@/types/product"
import { ProductCard } from "../ProductCard/ProductCard"
import styles from "./ProductList.module.scss";

export const ProductsList = ({ products }: { products: Product[]}) => {
    return (
        <div>
            <ul className={styles.grid}>
                {products.map(p => {
                    return <li key={p.id}>
                        <ProductCard product={p} />
                    </li>
                })}
            </ul>
        </div>
    )
}