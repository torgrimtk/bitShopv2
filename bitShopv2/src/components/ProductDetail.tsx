

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

        if (existingItemIndex !== -1) {
            cartItems[existingItemIndex].quantity += 1
        } else {
            cartItems.push({ ...cartItem, quantity: 1 })
        }

        //DU STOPPER HER SIST. Les på dette fra claude! "Step 2: Check if item already exists"

        sessionStorage.setItem('cart', JSON.stringify(cartItems))
        setProductBoughtFeedback(true)
        setTimeout(() => {
            setProductBoughtFeedback(false)
        }, 2000)

    }
}

export default ProductDetail