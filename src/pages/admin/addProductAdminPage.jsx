export default function AddProductPage(){
    return(
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-[600px] border-[3px] rounded-[15px] p-[40px] flex flex-wrap justify-between">

                <div className="w-[200px] flex flex-col gap-[5px]">
                    <label className="tex-sm font-semibold">Product ID</label>
                    <input type="text" className="w-full border-[1px] h-[40px] rounded-md"/>
                </div>
                <div className="w-[300px] flex flex-col gap-[5px]">
                    <label className="tex-sm font-semibold">Product Name</label>
                    <input type="text" className="w-full border-[1px] h-[40px] rounded-md"/>
                </div>
                <div className="w-[500px] flex flex-col gap-[5px]">
                    <label className="tex-sm font-semibold">Alternative Names</label>
                    <input type="text" className="w-full border-[1px] h-[40px] rounded-md"/>
                </div>
                <div className="w-[200px] flex flex-col gap-[5px]">
                    <label className="tex-sm font-semibold">Labeled Price</label>
                    <input type="text" className="w-full border-[1px] h-[40px] rounded-md"/>
                </div>
                <div className="w-[200px] flex flex-col gap-[5px]">
                    <label className="tex-sm font-semibold">Price</label>
                    <input type="text" className="w-full border-[1px] h-[40px] rounded-md"/>
                </div>
                <div className="w-[500px] flex flex-col gap-[5px]">
                    <label className="tex-sm font-semibold">Images</label>
                    <input type="text" className="w-full border-[1px] h-[40px] rounded-md"/>
                </div>
                <div className="w-[500px] flex flex-col gap-[5px]">
                    <label className="tex-sm font-semibold">Description</label>
                    <textarea type="text" className="w-full border-[1px] h-[100px] rounded-md"/>
                </div>
                <div className="w-[200px] flex flex-col gap-[5px]">
                    <label className="tex-sm font-semibold">Stock</label>
                    <input type="text" className="w-full border-[1px] h-[40px] rounded-md"/>
                </div>
                <div className="w-[200px] flex flex-col gap-[5px]">
                    <label className="tex-sm font-semibold">is Available</label>
                    <select className="w-full border-[1px] h-[40px] rounded-md">
                        <option value={true}>Available</option>
                        <option value={false}>Not Available</option>
                    </select>
                </div>
                <div className="w-[200px] flex flex-col gap-[5px]">
                    <label className="tex-sm font-semibold">Category</label>
                   <select className="w-full border-[1px] h-[40px] rounded-md">
                        <option value={"cream"}>Cream</option>
                        <option value={"face wash"}>Face Wash</option>
                        <option value={"soap"}>Soap</option>
                        <option value={"fragrance"}>Fragrance</option>
                   </select>
                </div>

            </div>
        </div>
    )
}