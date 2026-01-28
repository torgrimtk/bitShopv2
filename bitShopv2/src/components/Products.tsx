
//Here we will actually make the template and code for the Product that is on the website. 

import { useEffect, useState } from "react"
import { type TCategory, type TProduct } from "../models/ItemModel" //This lets us use the data models in the react hook under the Products function
import axios from 'axios'


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

    return (
        <div>
            <div className='flex flex-col-reverse gap-2 md:flex-row'>
                <input 
                    type='text'
                    placeholder='Search by title or description'
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    className='p-2 border-2 border-gray-300 rounded-md w-full'
                />
                <select 
                    value={selectedCategory}
                    onChange={e => handleCategoryChange(e.target.value)}
                    className='p-2 border-2 h-11 border-gray-300 rounded-md'
                >
                    <option value=''>All categories</option>
                    {categories.map(category => (
                        <option 
                            key={category.name}
                            value={category.name}
                        >
                            {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                        </option>
                    ))}
                </select>
            </div>



            
            {/* DU STOPPET HER SIST. DU MÅ FJERNE DIV OG P CLASSNAME UNDER HER FØR DU FORTSETTER */}
            {filteredProducts.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
        </div>
      ) : (
        <p className='mt-4 text-center'>No products available or found.</p>
      )}
        </div>
    )
}

export default Products