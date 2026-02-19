import type { TCartItem } from "./ProductDetail"

type TShoppingCartListProps = {
    id: number
    image: string
    title: string
    price: number
    quantity: number
    setCartItems?: (carrtItems: TCartItem[]) => void
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

    // DU STOPPET HER :) Les videre på det Claude skrev og kod i vei!

}