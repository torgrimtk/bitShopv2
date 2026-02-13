import { Link } from 'react-router-dom'
import pixelghost2 from '../../assets/pixelghost2.png'

const Logo = () => {
    return (
        <Link
            to={'/'}
            className='w-10 h-10 flex items-center lg:h-16 lg:w-16'
        >
            <img
                src={pixelghost2}
                alt='logo'
                className='hidden md:block'
            />
            <h1 className='text-white ml-0 text-md lg:text-xl md:ml-4'>
                bitShop
            </h1>

        </Link>
    )
}

export default Logo