import { useState } from "react";
import { BiCart, BiStore } from "react-icons/bi";
import { GiHamburger, GiHamburgerMenu } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

export default function Header(){
    const navigate = useNavigate();
    const [isOpen, setIsOpen]= useState(false);
    return(
        <header className="h-[100px] bg-accent flex justify-center items-center relative">
            {
                isOpen && 
                <div className="fixed z-[100] top-0 right-0 w-[100vw] h-[100vh] bg-[#00000050]">
                    <div className="h-full w-[350px] bg-white flex flex-col">
                        <div className="w-full bg-accent h-[120px] flex pl-[45px] flex-row items-center gap-[20px]">
                            <GiHamburgerMenu className="text-white md:hidden text-4xl" onClick={()=>{
                                setIsOpen(close);
                            }}/>
                            <img className="w-[180px] h-[80px] object-cover cursor-pointer"
                            onClick={()=>{
                                navigate("/")
                            }} src="/logo.png" alt="Logo"/>
                        </div>

                        <div className="w-full h-full flex flex-col p-[45px] items-start gap-[10px]">
                            <button className="text-accent text-2xl flex flex-row justify-center cursor-pointer"
                            onClick={()=>{
                                setIsOpen(false);
                                navigate("/")
                            }}>
                                <HiHome className="text-accent text-2xl mr-2"/>
                                Home
                            </button>

                            <button className="text-accent text-2xl flex flex-row justify-center cursor-pointer"
                            onClick={()=>{
                                setIsOpen(false);
                                navigate("/products")
                            }}>
                                <BiStore className="text-accent text-2xl mr-2"/>
                                Products
                            </button>

                            <button className="text-accent text-2xl flex flex-row justify-center cursor-pointer"
                            onClick={()=>{
                                setIsOpen(false);
                                navigate("/cart")
                            }}>
                                <BiCart className="text-accent text-2xl mr-2"/>
                                Cart
                            </button>
                        </div>

                    </div>
                </div>
            }
            <img className="w-[180px] h-[80px] object-cover absolute md:left-[40px] cursor-pointer"
            onClick={()=>{
                navigate("/")
            }} src="/logo.png" alt="Logo"/>
            <GiHamburgerMenu className="text-white absolute md:hidden left-[40px] text-4xl"
            onClick={()=>{
                setIsOpen(true);
            }}/>

            <div className="hidden w-full md:flex justify-center items-center">
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
                <Link to="/cart" className="absolute right-[80px]">
                    <BiCart className="text-white text-3xl ml-4"/>
                </Link>
            </div>
        </header>
    )
}