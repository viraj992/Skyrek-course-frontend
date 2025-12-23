 import axios from "axios";
 import { useEffect, useState } from "react";

export default function ReviewsAdminPage(){
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + "/api/reviews", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
        .then((res) => {
            setReviews(res.data);
            console.log("Reviews loaded:", res.data);
        })
        .catch((err) => {
            console.error("Error loading reviews:", err);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);

    return (
        
        <div className="w-[650px] h-full flex flex-col items-center ml-7">
            <table className="w-full border-[4px] border-accent mt-[20px]">
                <thead>
                    <tr>
                        <th className="p-[10px]">Reviewer</th>
                        <th className="p-[10px]">Rating</th>
                        <th className="p-[10px]">Comment</th>
                        <th className="p-[10px]">isApproved</th>
                    </tr>
                </thead>

                <tbody>
                    {reviews?.map((review) => (
                        <tr
                            key={review._id}
                            className="border-b-[1px] border-accent hover:bg-accent hover:text-white"
                        >
                            <td className="p-[10px]">{review.reviewerName}</td>
                            <td className="p-[10px]">{review.rating}</td>
                            <td className="p-[10px]">{review.comment}</td>
                            <td className="p-[10px]">{review.isApproved ? "Yes" : "No"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
