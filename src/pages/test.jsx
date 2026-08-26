import { useState } from "react";
import uploadMedia from "../utils/mediaUpload";

export default function TestPage(){

    const [file, setFile ] = useState(null)

    async function handleUpload(){
       
        try{
            const url = await uploadMedia(file);
            console.log(url);
            
        }catch(error){
            console
        }
    }

   

    return(
        <div className="w-full t h-screen flex flex-col justify-center items-center text-secondary bg-primary">
            <input onChange={(e) => {
                setFile(e.target.files[0]);
            }} type="file"/>
           <button className="bg-secondary text-primary px-4 py-1">
                Upload
            </button>
        
        
        </div>
    )
}
//https://scfrjdrovqcsttyratlv.supabase.co/rest/v1/
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjZnJqZHJvdnFjc3R0eXJhdGx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYxOTI5NDAsImV4cCI6MjEwMTc2ODk0MH0.g-iZBrH5FQ73Xw4DAh8IY6BPaT6PmB593dzLjmTq3tw