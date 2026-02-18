import { Product } from "@/types/product"
import { ProductCard } from "../ProductCard/ProductCard"

export const ProductsList = ({ products }: { products: Product[]}) => {
    return (
        <div>
            <ul>
                {products.map(p => {
                    return <li key={p.id}>
                        <ProductCard product={p} />
                    </li>
                })}
            </ul>
        </div>
    )
}