import { useState } from "react"


//blueprint of the information from the fakestoreapi.com/products site
export type TProductDetailProps = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}

export type TCartItem = {
    id: number
    quantity: number
    image: string
    title: string
    price: number
    updateCart?: (cartItems: TCartItem[]) => void
}

const ProductDetail: React.FC<TProductDetailProps> = ({
    id,
    title,
    price,
    description,
    category,
    image,
    rating,
}) => {
    const [productBoughtFeedback, setProductBoughtFeedback] = useState<boolean>(false)

    const addToCart = (cartItem: TCartItem) => {
        const existingCart = sessionStorage.getItem('cart')
        const cartItems: TCartItem[] = existingCart ? JSON.parse(existingCart) : []

        const existingItemIndex = cartItems.findIndex(
            item => item.id === cartItem.id
        )

        // if the item exists, we increment the quantity
        if (existingItemIndex !== -1) {
            cartItems[existingItemIndex].quantity += 1
        } else {
            // if the item does not exist, we add it to the cart with quantity of 1, the start value
            cartItems.push({ ...cartItem, quantity: 1 })
        }

        sessionStorage.setItem('cart', JSON.stringify(cartItems))

        setProductBoughtFeedback(true)
        setTimeout(() => {
            setProductBoughtFeedback(false)
        }, 2000)

    }

    return (
        <div
            className='w-4/5 mx-auto mt-8 p-4 bg-white'
            key={id}
        >
            <div className='flex flex-col items-start justify-between lg:flex-row lg:w-full'>
                <div className='w-full mb-4 border p-4 rounded-3xl shadow-md mr-0 md:w-full md:mr-4 md:mb-0'>
                    <img
                        src={image}
                        alt={title}
                        className='w-full max-h-96 object-contain'
                    />
                </div>
                <div className='w-full md:pl-4 md:mt-4'>
                    <h1 className='text-3x1 font-bold mb-4'>{title}</h1>
                    <p className='text-gray-700 mb-4'>{description}</p>
                    <div className='flex justify-between my-6 flex-col lg:flex-row'>
                        <div className='flex items-center mb-2 text-gray-700'>
                            <span className='mr-2'>Product Rating:</span>
                            <span>
                                {rating.rate} / 5 ({rating.count})
                            </span>
                        </div>
                        <button
                            className='bg-sky-700 text-white py-2 px-4 rounded-3xl hover:bg-sky-600'
                            onClick={() => addToCart({ id, title, price, image, quantity: 1 })}
                        >
                            Click here to add to cart!
                        </button>
                    </div>
                </div>
                {productBoughtFeedback && (
                    <div className='text-center mt-4 bg-green-400 rounded-xl border py-4 shadow-md'>
                        Product added to the cart! Yay!
                    </div>
                )}
            </div>

        </div>
    )

}

export default ProductDetail