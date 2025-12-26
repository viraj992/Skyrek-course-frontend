import { Link } from "react-router-dom"
import { addToCart } from "../utils/cart";
import toast from "react-hot-toast";

export default function ProductCard(props){
    const product = props.product


    return(
        
        <div className="w-[300px] h-auto flex flex-col shadow-2xl rounded-2xl overflow-hidden">

    {/* Only this section is clickable for navigation */}
    <Link to={`/overview/${product.productId}`} className="w-full">
        <img src={product.images[0]} className="w-full h-[275px] object-cover" />
        <div className="w-full h-[100px] px-2">
            <span className="text-gray-400 text-[12px]">{product.productId}</span>
            <h1 className="text-xl font-bold">
                {product.name}{" "}
                <span className="text-gray-500 text-[14px]">{product.category}</span>
            </h1>
            {product.labelledPrice > product.price ? (
                <p>
                    <span className="line-through mr-[10px]">{product.labelledPrice.toFixed(2)}</span>
                    <span>{product.price.toFixed(2)}</span>
                </p>
            ) : (
                <span>{product.price.toFixed(2)}</span>
            )}
        </div>
    </Link>

    {/* ADD TO CART BUTTON OUTSIDE LINK */}
    <button
        onClick={() => {
            addToCart(product, 1);
            toast.success("Product added to cart");
        }}
        className="mt-auto w-full h-[45px] bg-accent text-white rounded-none hover:bg-white hover:text-accent border border-accent cursor-pointer"
    >
        Add to Cart
    </button>
</div>
    )
}