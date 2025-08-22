import { Link } from "react-router-dom"

export default function ProductCard(props){
    const product = props.product


    return(
        <Link to={"/overview"} className="w-[300px] h-[400px] flex flex-col shrink-0 shadow-2xl rounded-2xl overflow-hidden">
            <img src={product.images[0]} className="w-full h-[275px] object-cover"/>
            <div className="w-full h-[125px] flex flex-col">
                <span className="text-gray-400 text-[12px]">{product.productId}</span>
                <h1 className="text-xl font-bold">
                    {product.name} {" "}
                    <span className="text-gray-500 text-[14px]">{product.category}</span>
                </h1>
                <div>
                    {  product.labelledPrice > product.price ? (
                        <p>
                            <span className="line-through mr-[10px]">{product.labelledPrice.toFixed(2)}</span>
                            <span>{product.price.toFixed(2)}</span>
                        </p>
                    ) : (
                        <span> {product.price.toFixed(2)} </span>

                    )}
                </div>
            </div>
        </Link>
    )
}