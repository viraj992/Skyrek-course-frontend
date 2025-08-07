import { Link, Route, Routes } from "react-router-dom";
import { FaBoxArchive } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { IoPeople } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";

export default function AdminPage(){
    return(
        <div className="w-full h-screen bg-red-900 flex">
            <div className="w-[300px] h-full flex flex-col items-center bg-white">

                <span className="text-3xl font-bold my-5">Admin Panel</span>
                <Link className="flex h-[60px] w-full p-[25px] items-center text-xl gap-[25px]" to="/admin/products"><FaBoxArchive />Products</Link>
                <Link className="flex h-[60px] w-full p-[25px] items-center text-xl gap-[25px]" to="/admin/orders"><GiShoppingBag />Orders</Link>
                <Link className="flex h-[60px] w-full p-[25px] items-center text-xl gap-[25px]" to="/admin/users"><IoPeople />Users</Link>
                <Link className="flex h-[60px] w-full p-[25px] items-center text-xl gap-[25px]" to="/admin/users"><IoSettings />Settings</Link>
            </div>
            <div className="w-[calc(100%-300px)] bg-blue-900 h-full">
                <Routes path="/*">
                    <Route path="/" element={<h1>Dashboard</h1>}/> 
                    <Route path="/products" element={<h1>Products</h1>}/>
                    <Route path="/orders" element={<h1>Orders</h1>}/>
                </Routes>
            </div>
            
        </div>
    )
}