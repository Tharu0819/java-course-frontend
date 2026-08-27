import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import uploadMedia from "../../utils/mediaUpload";

export default function AdminAddProductPage(){

    const[productId, setProductId]=useState("");
    const[name, setName]=useState("");
    const[altName, setAltName]=useState("");
    const[price, setPrice]=useState("");
    const[lablePrice,setLablePrice]=useState("");
    const[description, setDescription]=useState("");
    const[images, setImages]=useState([]);
    const[brand, setBrand]=useState("");
    const[model,setModel]=useState("");
    const[category,setCategory]=useState("");
    const[isAvailable,setIsAvailble]=useState(true);
    const[stock,setStock]=useState(0);
    const navigate = useNavigate();

    async function hadleSave(){
       try{

            const token = localStorage.getItem("token");
            if(token == null){
                toast.error("You must be logged in to perform this action.");
                window.location.href="/login";
                return;
            }

            const mediaUploadPromises=[]

            for(let i=0; i<images.length; i++){
                mediaUploadPromises.push(uploadMedia(images[i]));
            }
            const urls = await Promise.all(mediaUploadPromises);
            const altNameArray = altName.split(",")

            const productData={
                productId : productId,
                name : name,
                altName : altNameArray,
                price : price,
                lablePrice : lablePrice,
                description: description,
                images : urls,
                brand : brand,
                model : model,
                category :category,
                isAvailable : isAvailable,
                stock : stock
            }

            await axios.post(import.meta.env.VITE_API_URL+"/products",productData,
                {
                    headers :{
                        "Authorization" : "Bearer "+token
                    }
                }
            )
            toast.success("Product added successfully..");

            navigate("/admin/products");

            //upload images


       }catch(error){
            console.error("error adding product",error)
            console.log("error response data", error?.response)
            toast.error(error?.response?.data?.message || "failed to add product.Please try again")
       }
    }
  

    return(
        <div className="w-full h-full  flex flex-col items-center p-4  overflow-y-scroll">

            <div className=" sticky top-0 w-full h-[100px] rounded-lg bg-accent text-white flex items-center p-5 justify-between">
                <h1 className="text-2xl font-semibold ">Add New Product</h1>
                <div className="h-full">
                    <button onClick={hadleSave} className=" px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Save</button>
                    <button className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Cancel</button>
                </div>
            </div>
            

            <div className="w-full h-full flex flex-wrap bg-white shadow-2xl p-5 mt-5 rounded-lg ">

                <div className="w-1/4 p-2">
                <label className="block mb-2 font-semibold">Product ID</label>
                <input  className="border border-gray-300 rounded-md p-2 w-full"
                    value={productId}
                    onChange={(e)=>{setProductId(e.target.value)}}
                />
                </div>  

                <div className="w-3/4 p-2">
                <label className="block mb-2 font-semibold">Name</label>
                <input  className="border border-gray-300 rounded-md p-2 w-full"
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                />
                </div> 

                <div className="w-full p-2">
                <label className="block mb-2 font-semibold">Alternative Name (comma separated)</label>
                <input  className="border border-gray-300 rounded-md p-2 w-full"
                    value={altName}
                    onChange={(e)=>{setAltName(e.target.value)}}
                />
                </div>

                <div className="w-1/4 p-2">
                <label className="block mb-2 font-semibold">Price</label>
                <input  className="border border-gray-300 rounded-md p-2 w-full"
                    value={price}
                    onChange={(e)=>{setPrice(e.target.value)}}
                />
                </div> 

                <div className="w-1/4 p-2">
                <label className="block mb-2 font-semibold">Lable Price</label>
                <input  className="border border-gray-300 rounded-md p-2 w-full"
                    value={lablePrice}
                    onChange={(e)=>{setLablePrice(e.target.value)}}
                />
                </div>  

                <div className="w-1/4 p-2">
                <label className="block mb-2 font-semibold">Category</label>
                <select 
                value={category}
                onChange={
                    (e)=>{setCategory(e.target.value);}}
                    className="border border-gray-300 rounded-md p-2 w-full">
                    <option value="Laptop">Laptop</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Cammera">Cammera</option>
                    <option value="Airbuds">Airbuds</option>
                    <option value="Graphic Cards">Graphic Cards</option>
                    <option value="Other">Other</option>
                </select>
                </div> 

                <div className="w-1/4 p-2">
                <label className="block mb-2 font-semibold">Images</label>
                <input type="file" multiple className="border border-gray-300 rounded-md p-2 w-full"
                    onChange={(e)=>{
                        setImages(e.target.files)
                    }}
                />
                </div>  

                <div className="w-full p-2">
                <label className="block mb-2 font-semibold">Description</label>
                <textarea  className="border border-gray-300 rounded-md p-2 w-full"
                    value={description}
                    onChange={(e)=>{setDescription(e.target.value)}}
                />
                </div>  

                <div className="w-1/4 p-2">
                <label className="block mb-2 font-semibold">Brand</label>
                <select
                    value={brand}
                    onChange={(e)=>{setBrand(e.target.value)}}
                    className="border border-gray-300 rounded-md p-2 w-full">
                        <option value="Apple">Apple</option>
                         <option value="Samsung">Samsung</option>
                          <option value="sony">Sony</option>
                           <option value="Dell">Dell</option>
                            <option value="Hp">Hp</option>
                            <option value="Nividea">Nividea</option>
                             <option value="Other">Other</option>
                </select>
                </div> 

                <div className="w-1/4 p-2">
                <label className="block mb-2 font-semibold">Model</label>
                <input  className="border border-gray-300 rounded-md p-2 w-full"
                    value={model}
                    onChange={(e)=>{setModel(e.target.value)}}
                />
                </div>  

                <div className="w-1/4 p-2">
                <label className="block mb-2 font-semibold">Stock</label>
                <input  className="border border-gray-300 rounded-md p-2 w-full"
                    value={stock}
                    onChange={(e)=>{setStock(e.target.value)}}
                />
                </div> 

                <div className="w-1/4 p-2 ">
                <label className="block mb-2 font-semibold">Availability</label>
                <select
                    value={isAvailable}
                   onChange={(e) => {setIsAvailble(e.target.value === "true");
                   }}className="border border-gray-300 rounded-md p-2 w-full">
                    <option className="bg-green-600 text-white font-semibold" value={true}>Available</option>
                    <option className="bg-red-600 text-white font-semibold" value={false}>Not Available</option>
                </select>
                
                </div> 

                




                   
                
            </div>

            
        </div>
    )
}