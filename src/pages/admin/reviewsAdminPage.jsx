import axios from "axios";
import { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import Loader from "../../components/loader";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function ReviewsAdminPage() {
	const [reviews, setReviews] = useState([]);
	const [loading, setLoading] = useState(true);

	const [popupVisible, setPopupVisible] = useState(false);
	const [clickedReview, setClickedReview] = useState(null);
	const [isApproved, setIsApproved] = useState("no");

	const navigate = useNavigate();

	useEffect(() => {
		if (loading) {
			axios
				.get(import.meta.env.VITE_BACKEND_URL + "/api/reviews", {
					headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
				})
				.then((res) => {
					setReviews(res.data);
					setLoading(false);
				})
				.catch((err) => {
					console.error("Error loading reviews:", err);
					setLoading(false);
				});
		}
	}, [loading]);

	return (
		<div className="w-[900px] h-full flex flex-col items-center ml-7">
			{loading ? (
				<Loader />
			) : (
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
								className="border-b-[1px] border-accent hover:bg-accent hover:text-white cursor-pointer"
								onClick={() => {
									setClickedReview(review);
									setIsApproved(review.isApproved ? "yes" : "no");
									setPopupVisible(true);
								}}
							>
								<td className="p-[10px]">{review.reviewerName}</td>
								<td className="p-[10px]">{review.rating}</td>
								<td className="p-[10px]">{review.comment}</td>
								<td className="p-[10px]">{review.isApproved ? "Yes" : "No"}</td>
								<td
									className="p-[10px]"
									onClick={(e) => e.stopPropagation()} // Stop popup opening
								>
									<BiTrash
										className="bg-red-500 p-[7px] text-3xl rounded-full text-white shadow-2xl shadow-black cursor-pointer"
										onClick={() => {
											const token = localStorage.getItem("token");
											if (!token) {
												navigate("/login");
												return;
											}
											axios
												.delete(import.meta.env.VITE_BACKEND_URL + "/api/reviews/" + review._id, {
													headers: { Authorization: `Bearer ${token}` },
												})
												.then(() => {
													toast.success("Review deleted successfully");
													setLoading(true);
												})
												.catch((error) => {
													console.error("Error deleting Review:", error);
													toast.error("Failed to delete Review");
												});
										}}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}

			{/* POPUP */}
			{popupVisible && clickedReview && (
				<div className="fixed top-0 left-0 w-full h-full bg-[#00000050] flex justify-center items-center z-50">
					<div className="w-full max-w-lg bg-white rounded-lg p-6 relative shadow-xl">

						{/* Save Button */}
						{(isApproved === "yes") !== clickedReview.isApproved && (
							<button
								className="absolute top-2 right-2 bg-blue-500 text-white p-2 rounded-lg"
								onClick={async () => {
									setPopupVisible(false);
									try {
										await axios.patch(
											import.meta.env.VITE_BACKEND_URL + "/api/reviews/" + clickedReview._id,
											{ isApproved: isApproved === "yes" },
											{
												headers: {
													Authorization: `Bearer ${localStorage.getItem("token")}`,
												},
											}
										);
										toast.success("Review updated successfully");
										setLoading(true);
									} catch (err) {
										console.error(err);
										toast.error("Failed to update review");
									}
								}}
							>
								Save Changes
							</button>
						)}

						{/* Close Button */}
						<button
							className="absolute w-[30px] h-[30px] bg-red-600 border-2 border-red-600 text-white 
                            top-[-25px] right-[-25px] rounded-full cursor-pointer hover:bg-transparent hover:text-red-600"
							onClick={() => setPopupVisible(false)}
						>
							X
						</button>

						<h2 className="text-2xl font-semibold mb-4">Review Details</h2>

						<div className="space-y-3">
							<p>
								<span className="font-semibold">Reviewer:</span> {clickedReview.reviewerName}
							</p>
							<p>
								<span className="font-semibold">Rating:</span> {clickedReview.rating}
							</p>
							<p>
								<span className="font-semibold">Comment:</span> {clickedReview.comment}
							</p>

							<p>
								<span className="font-semibold">isApproved:</span>{" "}
								<select
									className="ml-4 p-1 border rounded"
									value={isApproved}
									onChange={(e) => setIsApproved(e.target.value)}
								>
									<option value="yes">Yes</option>
									<option value="no">No</option>
								</select>
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
