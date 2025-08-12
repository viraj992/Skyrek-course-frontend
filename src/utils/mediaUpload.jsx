const url = "https://gahctdfvkjlwulpijbxo.supabase.co";

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhaGN0ZGZ2a2psd3VscGlqYnhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5NzEzMzMsImV4cCI6MjA3MDU0NzMzM30.Hrmt4EkR9-Pdj6CbZAuDANavu5nueYNiTPvwBPyjYrw"

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(url,key)

export default function uploadFile(file){
    const promise = new Promise(
        (resolve, reject)=>{
            
            if( file == null){
                reject("Please select a file to upload");
                return;
            }

            const timeStamp = new Date().getTime();  // for unique name 
            const fileName = timeStamp+ "-"+file.name

            supabase.storage.from("images").upload(fileName,file,{
            cacheControl: "3600",
            upsert: false
        }).then(
            ()=>{
                const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
            
                resolve(publicUrl)
                }
        ).catch(
            (error)=>{
                    
                    reject("failed to upload file");
                }
            )
        }
    )
    return promise;
}