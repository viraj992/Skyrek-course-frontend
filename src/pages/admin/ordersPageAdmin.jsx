import axios from "axios";
import { useEffect, useState } from "react"
import Paginator from "../../components/paginator";

export default function OrdersPageAdmin(){
    const [orders, setOrders] = useState([]);

    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);

    const [popupVisible,setPopupVisible] = useState(false);
    const [clickedOrder, setClickedOrder] = useState(null);

    useEffect(() => {
        if(loading){
            axios.get(import.meta.env.VITE_BACKEND_URL + "/api/orders/"+page+"/"+limit,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((res) => {
                setOrders(res.data.orders);
                setTotalPages(res.data.totalPages);
                setLoading(false);
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
        }
    },[loading,page,limit]);
        
    return(
        <div className="w-full h-full flex flex-col justify-between items-start"> 
            <table className="w-full border-[3px] mt-[20px]">
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
                            <tr key={order.orderID} className="border-b-[1px] hover:bg-blue-600 hover:text-white"
                            onClick={()=>{
                                setClickedOrder(order);
                                setPopupVisible(true);
                            }}>
                                <td className="p-[10px]">{order.orderID}</td>
                                <td className="p-[10px]">{order.email}</td>
                                <td className="p-[10px]">{order.name}</td>
                                <td className="p-[10px]">{order.address}</td>
                                <td className="p-[10px]">{order.phone}</td>
                                <td className="p-[10px]">{order.status}</td>
                                <td className="p-[10px]">{new Date(order.date).toLocaleDateString()}</td>
                                <td className="p-[10px] text-end">{order.total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {
                popupVisible && (
                    <div className="fixed top-0 left-0 w-full h-full bg-[#00000050] flex justify-center items-center">
                        <div className="w-[600px] h-[600px] top-[12px] bg-white relative">
                            {
                                clickedOrder.orderID 
                            }
                            <button className="absolute w-[30px] h-[30px] bg-red-600 border-[2px] border-red-600 text-white top-[-28px] right-[-28px] rounded-full cursor-pointer hover:bg-transparent hover:text-red-600"
                            onClick={()=>{
                                setPopupVisible(false);
                            }}>
                                X
                            </button>
                        </div>
                    </div>
                )
            }
            <Paginator currentPage={page} totalPages={totalPages} setCurrentPage={setPage}
				limit={limit} setLimit={setLimit} setLoading={setLoading}/>
        </div>
    )
}