//const url "https://gahctdfvkjlwulpijbxo.supabase.co"
//const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhaGN0ZGZ2a2psd3VscGlqYnhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5NzEzMzMsImV4cCI6MjA3MDU0NzMzM30.Hrmt4EkR9-Pdj6CbZAuDANavu5nueYNiTPvwBPyjYrw"
import { useState } from "react"


export default function TestPage(){
    const [file, setFile] = useState(null);
    
    function handleUpload(){
        console.log(file)
    }
    return(
        <div className="w-full h-screen flex justify-center items-center">
            <input type="file"
            onChange={
                (e)=>{
                    //console.log(e)
                    //console.log(e.target.files[0])
                    setFile(e.target.files[0]);
                }
            }/>
            <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
                upload
            </button>
        </div>
    )
}