import { createClient } from "@supabase/supabase-js";

let url ="https://scfrjdrovqcsttyratlv.supabase.co";
let key ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjZnJqZHJvdnFjc3R0eXJhdGx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYxOTI5NDAsImV4cCI6MjEwMTc2ODk0MH0.g-iZBrH5FQ73Xw4DAh8IY6BPaT6PmB593dzLjmTq3tw"

const supabase = createClient(url , key);

export default function uploadMedia(file){
    return new Promise(
        (resolve , reject)=>{
            if(file == null){
                reject("no file selected");
            }else{
                const timeStamp = new Date().getTime();
                const fileName = timeStamp + " " + file.name;

                supabase.storage
                    .from("images").upload(fileName , file , {
                        upsert : false,
                        cacheControl : "3600",
                    }).then(()=>{
                        
                        const publicUrl = supabase.storage
                            .from("images")
                            .getPublicUrl(fileName).data.publicUrl;

                        console.log(publicUrl);
                        resolve(publicUrl);

                    }).catch((error)=>{
                        reject(error);
                    });
            }
        }
    )
}