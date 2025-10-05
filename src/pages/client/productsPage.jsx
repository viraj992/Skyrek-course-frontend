import { useEffect, useState } from "react"
import Loader from "../../components/loader";
import axios from "axios";
import ProductCard from "../../components/productCard";

export default function ProductPage(){
    const [prodcuts,setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(
        ()=>{
            if (loading){
                axios.get(import.meta.env.VITE_BACKEND_URL+"/api/products").then(
                (res)=>{
                    //console.log(res.data)
                    setProducts(res.data);
                    setLoading(false);
                    });
                }
            }, [loading]
    );

    return(
        <div className="w-full h-full">
            {
                loading ? <Loader/> : 
                <div className="w-full flex flex-wrap gap-[40px] justify-center items-center p-[20px]">
                    {
                        prodcuts.map((product)=>{
                            return(
                                <ProductCard key={product.productId} product={product} />
                                                                     // relevent product all details
                                
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}