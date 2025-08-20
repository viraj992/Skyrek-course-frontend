import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="h-[100px] bg-blue-500 flex justify-center items-center">
            <Link to="/" className="text-white text-1xl ">
                Home
            </Link>
            <Link to="/products" className="ml-4 text-white text-1xl">
                Products
            </Link>
            <Link to="/reviews" className="ml-4 text-white text-1xl">
                Reviews
            </Link>
            <Link to="/about-us" className="ml-4 text-white text-1xl">
                About Us
            </Link>
            <Link to="/contact-us" className="ml-4 text-white text-1xl">
                Contact Us
            </Link>
        </header>
    )
}