import { useState} from "react";
import { BiCart, BiStore } from "react-icons/bi";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { GiHamburger, GiHamburgerMenu } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import { MdPersonAdd } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";



export default function Header(){
    const navigate = useNavigate();
    const [isOpen, setIsOpen]= useState(false);
    const token = localStorage.getItem("token");

    
    return(
        <header className="h-[100px] bg-accent flex justify-center items-center relative">


            {
                isOpen && 
                <div className="fixed z-[100] top-0 right-0 w-[100vw] h-[100vh] bg-[#00000050]">
                    <div className="h-full w-[330px] bg-white flex flex-col">
                        <div className="w-full bg-accent h-[120px] flex pl-[45px] flex-row items-center gap-[20px]">
                            <GiHamburgerMenu className="text-white md:hidden text-3xl" onClick={()=>{
                                setIsOpen(close);
                            }}/>
                            <img className="w-[180px] h-[80px] object-cover cursor-pointer"
                            onClick={()=>{
                                navigate("/")
                            }} src="/logo.png" alt="Logo"/>
                        </div>

                        <div className="w-full h-full flex flex-col p-[45px] items-start gap-[20px]">
                            <button className="text-accent text-xl flex flex-row justify-center cursor-pointer"
                            onClick={()=>{
                                setIsOpen(false);
                                navigate("/")
                            }}>
                                <HiHome className="text-accent text-2xl mr-4"/>
                                Home
                            </button>

                            <button className="text-accent text-xl flex flex-row justify-center cursor-pointer"
                            onClick={()=>{
                                setIsOpen(false);
                                navigate("/products")
                            }}>
                                <BiStore className="text-accent text-2xl mr-4"/>
                                Products
                            </button>

                            <button className="text-accent text-xl flex flex-row justify-center cursor-pointer"
                            onClick={()=>{
                                setIsOpen(false);
                                navigate("/cart")
                            }}>
                                <BiCart className="text-accent text-2xl mr-4"/>
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
            <GiHamburgerMenu className="text-white absolute md:hidden left-[40px] text-3xl"
            onClick={()=>{
                setIsOpen(true);
            }}/>

            <div className="hidden w-full md:flex justify-center items-center">
                <Link to="/" className="text-white text-xl hover:bg-white hover:rounded-full hover:px-4 hover:py-2 hover:text-accent hover:gap-2">
                    Home
                </Link>
                <Link to="/products" className="ml-6 text-white text-xl hover:bg-white hover:rounded-full hover:px-4 hover:py-2 hover:text-accent hover:gap-2">
                    Products
                </Link>
                <Link to="/reviews" className="ml-6 text-white text-xl hover:bg-white hover:rounded-full hover:px-4 hover:py-2 hover:text-accent hover:gap-2">
                    Reviews
                </Link>
                <Link to="/about-us" className="ml-6 text-white text-xl hover:bg-white hover:rounded-full hover:px-4 hover:py-2 hover:text-accent hover:gap-2">
                    About Us
                </Link>
                <Link to="/contact-us" className="ml-6 text-white text-xl hover:bg-white hover:rounded-full hover:px-4 hover:py-2 hover:text-accent hover:gap-2">
                    Contact Us
                </Link>
                <Link to="/cart" className="absolute right-[230px]">
                    <BiCart className="text-white text-3xl ml-4"/>
                </Link>

        
                {
                    token!=null && <button className="absolute right-[60px] text-xl font-medium cursor-pointer flex items-center gap-2 bg-white text-accent px-4 py-2 rounded-full"
                     onClick={
                        ()=>{
                            localStorage.removeItem("token");
                            navigate("/login");
                        }
                     }>
                        <FiLogOut className=" left-[75px] text-xl" />
                        Logout
                    </button>
                }
              
                {
                    token == null && <button className="absolute right-[60px] text-xl font-medium ml-4 cursor-pointer bg-white flex items-center  gap-2 text-accent px-4 py-2 rounded-full hover:bg-gray-200"
                     onClick={
                        ()=>{
                           navigate("/login");
                        }
                     }>
                        <MdPersonAdd className=" text-2xl " />
                        LogIn
                    </button>
                }

            </div>
        </header>
    )
}