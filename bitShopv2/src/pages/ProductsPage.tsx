import ProductsList from "../components/ProductsList"


const ProductsPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3x1 font-bold mb-6"> bitShop Products </h2>
            <div className="flex flex-col">
                <ProductsList />
            </div>
        </div>
    )
}

export default ProductsPage