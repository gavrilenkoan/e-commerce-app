import { Product } from "@/types/product"
import Link from "next/link"
import Image from "next/image"

export const ProductCard = ({ product }: { product: Product}) => {
    return (
        <Link href="/products/1">
            <div>
                {product.images && product.images[0] && (
                    <div>
                        <Image 
                            alt={product.title}
                            src={product.images[0]}
                            width={200}
                            height={200}
                        />
                    </div>
                )}
                <div>
                    <h2>{product.title}</h2>
                </div>
                <div>
                    <p>{product.description}</p>
                    <h3>${product.price}</h3>
                </div>
                <Link href="/products/1">View Details</Link>
            </div>
        </Link>
    )
}