import { Product } from "@/types/product";
import Image from "next/image"

const ProductPage = ({ product }: { product: Product }) => {
    return (
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

            <div>
                <button>-</button>
                <span>0</span>
                <button>+</button>
            </div>
        </div>
    )
};

export default ProductPage;