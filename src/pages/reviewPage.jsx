import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [sortType, setSortType] = useState("latest");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");

  // Add Review
  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) return alert("Please select a rating");

    const newReview = {
      id: Date.now(),
      rating,
      text: reviewText,
      date: new Date().toISOString(),
    };

    setReviews([newReview, ...reviews]);
    setRating(0);
    setReviewText("");
    alert("Review added!");
  };

  // Sorting logic
  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortType === "latest") {
      return new Date(b.date) - new Date(a.date);
    }
    if (sortType === "highest") {
      return b.rating - a.rating;
    }
    if (sortType === "lowest") {
      return a.rating - b.rating;
    }
    return 0;
  });

  // Average Rating
  const avgRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length || 0;

  return (
    <div className="p-10 min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center">Customer Reviews</h1>

      {/* Summary */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8 text-center">
        <h2 className="text-2xl font-semibold">Average Rating</h2>
        <p className="text-3xl font-bold mt-2">
          ⭐ {avgRating.toFixed(1)} / 5
        </p>
        <p className="text-gray-600">{reviews.length} reviews</p>
      </div>

      {/* Add Review Form */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-10">
        <h2 className="text-2xl font-semibold mb-4">Write a Review</h2>

        <form onSubmit={handleSubmit}>
          <div className="flex gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={32}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                className={`cursor-pointer ${
                  star <= (hover || rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>

          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Write your review..."
            className="w-full border p-4 rounded-lg focus:outline-accent"
            rows="4"
            required
          ></textarea>

          <button
            type="submit"
            className="mt-4 bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent/90"
          >
            Submit Review
          </button>
        </form>
      </div>

      {/* Sort Options */}
      <div className="flex justify-end mb-4">
        <select
          className="border p-2 rounded-lg"
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="latest">Latest</option>
          <option value="highest">Highest Rating</option>
          <option value="lowest">Lowest Rating</option>
        </select>
      </div>

      {/* Review List */}
      <div className="space-y-4">
        {sortedReviews.length === 0 ? (
          <p className="text-center text-gray-500">No reviews yet.</p>
        ) : (
          sortedReviews.map((r) => (
            <div
              key={r.id}
              className="bg-white p-5 rounded-xl shadow-md border-l-4 border-accent"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              <p className="mt-2 text-gray-800">{r.text}</p>

              <p className="text-sm text-gray-500 mt-1">
                {new Date(r.date).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
