import type { TCartItem } from "./ProductDetail"

type TShoppingCartListProps = {
    id: number
    image: string
    title: string
    price: number
    quantity: number
    setCartItems?: (cartItems: TCartItem[]) => void
    decrementQuantity?: (id: number) => TCartItem[]
    incrementQuantity?: (id: number) => TCartItem[]
    deleteCartItem?: (id: number) => TCartItem[]
}

const ShoppingCartList: React.FC<TShoppingCartListProps> = ({
    id,
    image,
    title,
    price,
    quantity,
    setCartItems,
}) => {
    const getExistingCart = () => {
        const existingCart = sessionStorage.getItem('cart')
        return existingCart ? JSON.parse(existingCart) : []
    }

    const updateCart = (cartItems: TCartItem[]) => {
        if (setCartItems) {
            setCartItems(cartItems)
            sessionStorage.setItem('cart', JSON.stringify(cartItems))
        }

        const decrementQuantity = (id: number) => {
            const cartItems: TCartItem[] = getExistingCart()
            const existingItemIndex = cartItems.findIndex(item => item.id === id)

            if (existingItemIndex !== -1) {
                if (cartItems[existingItemIndex].quantity === 1) {
                    cartItems.splice(existingItemIndex, 1)
                } else {
                    cartItems[existingItemIndex].quantity -= 1
                }
            }
            updateCart(cartItems)
        }

    }

    // DU STOPPET HER :) Les videre på det Claude skrev og kod i vei!

}