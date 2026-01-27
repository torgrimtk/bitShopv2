
//Here we will actually make the template and code for the Product that is on the website. 

import { useEffect, useState } from "react"
import { type TCategory, type TProduct } from "../models/ItemModel" //This lets us use the data models in the react hook under the Products function
import axios from "axios"


const Products = () => {

    const [products, setProducts] = useState<TProduct[]>([])
    const [categories, setCategories] = useState<TCategory[]>([])
    const [selectedCategory, setSelectedCategory] = useState<string>('')
    const [searchQuery, setSearchQuery] = useState<string>('')

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

    // Choose the category
    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category)
    }

    //Search handler. Changes based on what the user searches for
    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
    }

    const filteredProducts = products.filter(product => {

        // if the category and product do not both exist inside of selectedCategory, return false
        if (selectedCategory && product.category !== selectedCategory) {
            return false
        }
        // if there is a searchQuery, and is it in the title or description? if NOT (!), then return false
        if (
            searchQuery && 
            !(
                product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase())
            )
        ) {
            return false
        }
        // if none of the conditions are met, then the function returns true
        return true
    })

    // DU ER HER :D 

    return (
        <>
            <h1>PRODUCTS PLACEHOLDER</h1>
        </>
    )

}

export default Products