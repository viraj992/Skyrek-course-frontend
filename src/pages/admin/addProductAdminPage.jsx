import { useState } from "react";
import { Link } from "react-router-dom";

export default function AddProductPage(){
    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [alternativeNames, setAlternativeNames] = useState("");
    const [labeledPrice, setLabeledPrice] = useState("");
    const [price, setPrice] = useState("");
    const [images, setImages] = useState([]);
	const [description, setDescription] = useState("");
	const [stock, setStock] = useState("");
	const [isAvailable, setIsAvailable] = useState(true);
	const [category, setCategory] = useState("cream");
    

    return(
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-[600px] border-[3px] rounded-[15px] p-[40px] flex flex-wrap justify-between">

                <div className="w-[200px] flex flex-col gap-[5px]">
                    <label className="tex-sm font-semibold">Product ID</label>
                    <input type="text"
                    value={productId}
                    onChange={(e) => {
                        setProductId(e.target.value)
                    }}
                    className="w-full border-[1px] h-[40px] rounded-md"
                    />
                </div>

                <div className="w-[300px] flex flex-col gap-[5px]">
                    <label className="tex-sm font-semibold">Product Name</label>
                    <input
						type="text"
						value={productName}
						onChange={(e) => setProductName(e.target.value)}
						className="w-full border-[1px] h-[40px] rounded-md"
					/>
                </div>
                <div className="w-[500px] flex flex-col gap-[5px]">
                    <label className="tex-sm font-semibold">Alternative Names</label>
                    <input
						type="text"
						value={alternativeNames}
						onChange={(e) => setAlternativeNames(e.target.value)}
						className="w-full border-[1px] h-[40px] rounded-md"
					/>
                </div>
                <div className="w-[200px] flex flex-col gap-[5px]">
                    <label className="tex-sm font-semibold">Labeled Price</label>
                    <input
						type="number"
						value={labeledPrice}
						onChange={(e) => setLabeledPrice(e.target.value)}
						className="w-full border-[1px] h-[40px] rounded-md"
					/>
                </div>
                <div className="w-[200px] flex flex-col gap-[5px]">
                    <label className="tex-sm font-semibold">Price</label>
                    <input
						type="number"
						value={price}
						onChange={(e) => setPrice(e.target.value)}
						className="w-full border-[1px] h-[40px] rounded-md"
					/>
                </div>
                <div className="w-[500px] flex flex-col gap-[5px]">
                    <label className="tex-sm font-semibold">Images</label>
                    <input
						multiple
						type="file"
						onChange={(e) => {
							setImages(e.target.files);
						}}
						className="w-full border-[1px] h-[40px] rounded-md"
					/>
                </div>
                <div className="w-[500px] flex flex-col gap-[5px]">
                    <label className="tex-sm font-semibold">Description</label>
                    <textarea
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						className="w-full border-[1px] h-[100px] rounded-md"
					></textarea>
                </div>
                <div className="w-[200px] flex flex-col gap-[5px]">
                    <label className="tex-sm font-semibold">Stock</label>
                    <input
						type="number"
						value={stock}
						onChange={(e) => setStock(e.target.value)}
						className="w-full border-[1px] h-[40px] rounded-md"
					/>
                </div>
                <div className="w-[200px] flex flex-col gap-[5px]">
                    <label className="tex-sm font-semibold">is Available</label>
                    <select
						value={isAvailable}
						onChange={(e) => {
							setIsAvailable(e.target.value === "true");
						}}
						className="w-full border-[1px] h-[40px] rounded-md"
					>
                        <option value={true}>Available</option>
                        <option value={false}>Not Available</option>
                    </select>
                </div>
                <div className="w-[200px] flex flex-col gap-[5px]">
                    <label className="tex-sm font-semibold">Category</label>
                   <select
						value={category}
						onChange={(e) => {
							setCategory(e.target.value);
						}}
						className="w-full border-[1px] h-[40px] rounded-md"
					>
                        <option value={"cream"}>Cream</option>
                        <option value={"face wash"}>Face Wash</option>
                        <option value={"soap"}>Soap</option>
                        <option value={"fragrance"}>Fragrance</option>
                   </select>
                </div>
                <div className="w-full flex justify-center flex-row py-[20px]">
                        <Link to={"/admin/products"} className="w-[200px] h-[50px] bg-white text-black border-[2px] rounded-md flex justify-center items-center">Cancel</Link>
                        <button className="w-[200px] h-[50px] bg-black text-white border-[2px] rounded-md flex justify-center items-center ml-[20px]">Add Product</button>
                </div>

            </div>
        </div>
    )
}