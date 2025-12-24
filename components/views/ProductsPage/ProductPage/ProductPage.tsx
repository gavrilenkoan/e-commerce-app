import { api } from "@/lib/api";
import ProductView from "./ProductView";

const ProductPage = async ({ id }: { id: string }) => {
    const product = await api<any>(`/products/${id}`);

    return <ProductView product={product} />;
}

export default ProductPage