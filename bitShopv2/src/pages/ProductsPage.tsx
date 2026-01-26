import Products from "../components/Products"

const ProductsPage = () => {
    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-3x1 font-bold mb-6"> bitShop Products </h2>
                <div className="flex flex-col">
                    <Products />
                </div>
            </div>
        </>
    )
}

export default ProductsPage