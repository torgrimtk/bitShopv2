
//Here we will actually make the template and code for the Product that is on the website. 

import { useEffect, useState } from "react"
import { type TCategory, type TProduct } from "../models/ItemModel" //This lets us use the data models in the react hook under the Products function
import axios from "axios"


const Products = () => {

    const [products, setProducts] = useState<TProduct[]>([])
    const [categories, setCategories] = useState<TCategory[]>([])
    const [selectedCategory, setSelectedCategory] = useState<string>('')

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Here we fetch the data from the API
                const response = await axios.get('https://fakestoreapi.com/products')
                setProducts(response.data)

                // Extract all categories from the products so we can filter them later on
                const allCategories: string[] = response.data.map((product: TProduct) =>
                    product.category
                )

                const uniqueCategories: TCategory[] = [...new Set(allCategories)].map(
                    category => ({
                        name: category,
                    })
                )
                setCategories(uniqueCategories)
            } catch (error) {
                console.error(error)
            }
        }
        fetchProducts()
    }, []);

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category)
    }

    // THIS IS WHERE YOU LEFT OF :D 

    return (
        <>
            <h1>PRODUCTS PLACEHOLDER</h1>
        </>
    )

}

export default Products