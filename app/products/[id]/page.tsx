import ProductPage from "@/components/views/ProductsPage/ProductPage/ProductPage"

const page = async ({ params } : { params: Promise<{ id: string }>}) => {

    const { id } = await params;
    return(<ProductPage id={id} />);
}

export default page