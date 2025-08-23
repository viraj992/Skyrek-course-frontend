import axios from "axios";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import { useParams } from "react-router-dom"
import Loader from "../../components/loader";
import ImageSlider from "../../components/imageSlider";

export default function ProductOverViewPage(){
    const params = useParams()
    const[product,setProduct] = useState(null);
    const[status, setStatus] = useState("loading"); //loading, sucess, error

    useEffect(
        ()=>{
            if(status === "loading"){
                axios.get(import.meta.env.VITE_BACKEND_URL + `/api/products/${params.productId}`).then(
                    (res)=>{
                        //console.log(res.data);
                        setProduct(res.data);
                        setStatus("success");
                    }
                ).catch(
                    (error)=>{
                        //toast.error("Failed to fetch product details");
                        setStatus("error");
                    }
                )
            }
        }, [status]
    )

    return(
        <div className="w-full h-full"> 
           {
             status == "loading" && <Loader/>
           }

           {
             status == "success" && <div className="w-full h-full flex flex-row">
                <div className="w-[49%] h-full flex flex-col justify-center items-center">
                    <ImageSlider images={product.images}/>
                </div>
                <div className="w-[49%] h-full bg-red-800">

                </div>
             </div>
           }


           {
             status == "error" && <div>Error Loading Product</div>
           }
        </div>
    )
}