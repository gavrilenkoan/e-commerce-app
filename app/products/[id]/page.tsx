import ProductPage from "@/components/views/ProductsView/ProductView"; 

const Page = async ({ params } : { params: Promise<{ id: string }>}) => {

    const { id } = await params;

    const res = await fetch(
        `https://dummyjson.com/products/${id}`,
        { cache: "no-store" }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch product");
    }

    const product = await res.json();

    return <ProductPage product={product} />;
}

export default Page