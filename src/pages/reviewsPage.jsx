import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

// ⭐ SWIPER IMPORTS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function AddReviewPage() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // ⭐ Star rating handler
  function handleStarClick(value) {
    setRating(value);
  }

  // ⭐ Auto-fetch reviews
  useEffect(() => {
    if (loading) {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/reviews")
        .then((res) => {
          setReviews(res.data);
          setLoading(false);
        })
        .catch(() => {
          toast.error("Failed to load reviews");
          setLoading(false);
        });
    }
  }, [loading]);

  // ⭐ Submit review
  function handleSubmit() {
    const token = localStorage.getItem("token");

    if (!token) return navigate("/login");

    if (rating === 0) return toast.error("Please select a rating");
    if (comment.trim().length < 3)
      return toast.error("Comment is too short");

    const data = { rating, comment };

    axios
      .post(import.meta.env.VITE_BACKEND_URL + "/api/reviews", data, {
        headers: { Authorization: "Bearer " + token },
      })
      .then(() => {
        toast.success("Review submitted");
        setComment("");
        setRating(0);
        setLoading(true); // refresh reviews
      })
      .catch(() => toast.error("Failed to submit review"));
  }

  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center bg-gray-50 pb-10">

      {/* FORM */}
      <div className="w-[700px] bg-white shadow-2xl rounded-2xl p-10 mt-10">
        <h2 className="text-2xl font-bold mb-6">Add Your Review</h2>

        {/* Rating */}
        <div className="flex flex-col mb-6">
          <label className="text-sm font-semibold mb-2">Rating</label>
          <div className="flex gap-2 text-3xl cursor-pointer">
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                onClick={() => handleStarClick(value)}
                className={`transition ${
                  value <= rating ? "text-yellow-500" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Comment */}
        <div className="flex flex-col mb-6">
          <label className="text-sm font-semibold mb-1">Comment</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border rounded-lg h-[120px] px-3 py-2"
            placeholder="Write your experience..."
          ></textarea>
        </div>

        <div className="w-full flex justify-between mt-8">
          <Link
            to={"/reviews"}
            className="w-[48%] h-[50px] border border-gray-400 rounded-lg flex justify-center items-center font-semibold hover:bg-gray-100 transition"
          >
            Cancel
          </Link>

          <button
            onClick={handleSubmit}
            className="w-[48%] h-[50px] bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition cursor-pointer"
          >
            Submit Review
          </button>
        </div>
      </div>


      {/* ⭐ SWIPER SLIDER */}
      <div className="w-[700px] bg-white shadow-xl rounded-xl p-6 mt-10">
        <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>

        {loading ? (
          <p>Loading…</p>
        ) : reviews.length === 0 ? (
          <p>No reviews yet</p>
        ) : (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            loop={true}
            style={{ paddingBottom: "40px" }}
          >
            {reviews.map((r) => (
              <SwiperSlide key={r._id}>
                <div className="bg-gray-100 border rounded-xl p-4 shadow-md h-[180px]">
                  
                  {/* Name */}
                  <div className="font-semibold text-lg mb-1">
                    {r.reviewerName}
                  </div>

                  {/* Stars */}
                  <div className="text-yellow-500 text-xl mb-2">
                    {"★".repeat(r.rating)}
                    {"☆".repeat(5 - r.rating)}
                  </div>

                  {/* Comment */}
                  <div className="text-gray-700 text-sm leading-5 h-[70px] overflow-hidden">
                    {r.comment}
                  </div>

                  {/* Date */}
                  <div className="text-gray-400 text-xs mt-3">
                    {new Date(r.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}
