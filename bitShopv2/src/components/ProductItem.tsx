import { Link } from "react-router-dom"

type TProductItemProps = {
    id: number
    title: string
    price: number
    description: string
    image: string
}

const ProductItem: React.FC<TProductItemProps> = ({
    id,
    title,
    price,
    description,
    image,
}) => {
    return (
        <Link
            to={`/product/${id}`}
            className='w-full border rounded-xl p-4 flex flex-col shadow-md sm:max-w-72 lg:max-w-full'
        >
            <div className='mb-2 h-36 md:h-48'>
                <img
                    src={image}
                    alt='product image'
                    className='w-full h-full object-contain'
                />
            </div>
         {/* DU ER HER. Les på claude sin "The Image Container" neste gang du skal progge! 
         Du klarer dette. Fokuser!! Ta å lag et flowchart også kanskje? Evt tegn det selv. */}

        </Link>
    )
}

export default ProductItem