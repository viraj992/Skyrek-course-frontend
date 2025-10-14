import axios from "axios";
import { useEffect, useState } from "react"

export default function OrdersPageAdmin(){
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(loading){
            axios.get(import.meta.env.VITE_BACKEND_URL + "/api/orders",{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((res) => {
                setOrders(res.data);
                setLoading(false);
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
        }
    },[loading]);
        
    return(
        <div className="w-full h-full flex items-start"> 
            <table className="w-full border-[3px] mt-[10px]">
                <thead>
                    <tr>
                        <th className="p-[10px]">Order ID</th>
                        <th className="p-[10px]">email</th>
                        <th className="p-[10px]">name</th>
                        <th className="p-[10px]">Address</th>
                        <th className="p-[10px]">Phone</th>
                        <th className="p-[10px]">Status</th>
                        <th className="p-[10px]">Date</th>
                        <th className="p-[10px]">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order,index)=>{
                            return(
                            <tr key={order.orderID}>
                                <td className="p-[10px]">{order.orderID}</td>
                                <td className="p-[10px]">{order.email}</td>
                                <td className="p-[10px]">{order.name}</td>
                                <td className="p-[10px]">{order.address}</td>
                                <td className="p-[10px]">{order.phone}</td>
                                <td className="p-[10px]">{order.status}</td>
                                <td className="p-[10px]">{new Date(order.date).toLocaleDateString()}</td>
                                <td className="p-[10px]">{order.total}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}