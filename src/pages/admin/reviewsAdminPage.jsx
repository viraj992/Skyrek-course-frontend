 import axios from "axios";
 import { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import Loader from "../../components/loader";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function ReviewsAdminPage(){
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            axios
                .get(import.meta.env.VITE_BACKEND_URL + "/api/reviews", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                })
                .then((res) => {
                    setReviews(res.data);
                    console.log("Reviews loaded:", res.data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error("Error loading reviews:", err);
                    setLoading(false);
                });
        }
    }, [loading]);

    const naviagete = useNavigate();




    return (
        
        <div className="w-[800px] h-full flex flex-col items-center ml-7">
            { loading ? (<Loader/>) :
            <table className="w-full border-[4px] border-accent mt-[20px]">
                <thead>
                    <tr>
                        <th className="p-[10px]">Reviewer</th>
                        <th className="p-[10px]">Rating</th>
                        <th className="p-[10px]">Comment</th>
                        <th className="p-[10px]">isApproved</th>
                        <th className="p-[10px]">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {reviews?.map((review) => (
                        <tr
                            key={review._id}
                            className="border-b-[1px] border-accent hover:bg-accent hover:text-white"
                        >
                            <td className="p-[10px] pl-[10px]">{review.reviewerName}</td>
                            <td className="p-[10px] pl-[30px]">{review.rating}</td>
                            <td className="p-[10px]">{review.comment}</td>
                            <td className="p-[10px] pl-[35px]">{review.isApproved ? "Yes" : "No"}</td>
                            <td className="p-[10px] flex flex-row justify-center items-center ">
                                <BiTrash className="bg-red-500 p-[7px] text-3xl rounded-full text-white shadow-2xl shadow-black cursor-pointer"
                                onClick={()=>{
                                    const token = localStorage.getItem("token");
                                    if(token == null){
                                        Navigate("/login");
                                        return;
                                    }
                                    axios.delete(import.meta.env.VITE_BACKEND_URL + "/api/reviews/" + review._id,
                                        {
                                            headers:{
                                                Authorization: `Bearer ${token}`
                                            }
                                        }
                                    ).then((res)=>{
                                        console.log("Review deleted successfully");
                                        console.log(res.data);
                                        toast.success("Review deleted successfully");
                                        setLoading(!loading);
                                    }
                                    ).catch(
                                        (error)=>{
                                            console.error("Error deleting Review:", error);
                                            toast.error("Failed to delete Review");
                                        }
                                    ) 
                                }

                                }/>
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>}
        </div>
    );
}
