import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

export default function AdminProductPage(){
    return(
        <div className="w-full h-full ">

            <Link to ="/admin/add-product" 
            className="fixed bottom-8 right-8 w-[60px] h-[60px] bg-accent flex justify-center items-center text-3xl text-white rounded-full shadow-2x1 hover:bg-black hover:text-white ">
            <FaPlus/>
            
            </Link>

        </div>
    )
}