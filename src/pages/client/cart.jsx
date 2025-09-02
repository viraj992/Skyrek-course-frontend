import { useState } from "react"
import {addToCart, getCart} from "../../utils/cart"
import { TbTrash } from "react-icons/tb"

export default function CartPage(){
    const [cart, setCart] = useState(getCart())
    return(
        <div className="w-full h-screen flex flex-col items-center py-[40px]">
            {
                cart.map(
                    (item)=>{
                        return(
                            <div key={item.productId} className="w-[800px] h-[100px] m-[10px] shadow-2xl flex flex-row items-center relative">
                                <img src={item.image} className="w-[100px] h-[100px] object-cover"/>

                                <div className="w-[320px] h-full flex flex-col justify-center pl-[10px]">
                                    <span className=" font-bold">{item.name}</span>
                                    <span className="font-semibold">{item.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                </div>

                                <div className="w-[190px] h-full flex flex-row justify-center items-center ">
                                    <button className="flex justify-center items-center w-[30px] rounded-lg bg-blue-600 text-white  cursor-pointer hover:bg-blue-400" onClick={
                                        ()=>{
                                            addToCart(item,-1);
                                            setCart(getCart());
                                        }
                                    }>-</button>
                                    <span className="mx-[10px]">{item.quantity}</span>
                                    <button className="flex justify-center items-center w-[30px] rounded-lg bg-blue-600 text-white cursor-pointer hover:bg-blue-400" onClick={
                                        ()=>{
                                            addToCart(item,1);
                                            setCart(getCart());
                                        }
                                    } >+</button>
                                </div>
                                <div className="w-[190px] h-full flex justify-end items-center pr-[10px]">
                                    <span className="font-semibold">{(item.quantity * item.price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                </div>
                                <button className="w-[30px] h-[30px] absolute right-[-40px] cursor-pointer bg-red-700 shadow rounded-full flex justify-center items-center text-white border-red-700 border-[2px] hover:bg-white hover:text-red-700" onClick={
                                    ()=>{
                                        addToCart(item, -item.quantity);
                                        setCart(getCart());
                                    }
                                }>
                                    <TbTrash className="text-xl"/>
                                </button>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}