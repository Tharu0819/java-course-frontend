import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(){
        console.log("Email:",email);
        console.log("Password:",password);
        //backend localhost:3000/users/login

        axios.post(import.meta.env.VITE_API_URL+"/users/login", {
            email : email,
            password: password
        }).then((Response)=>{
            console.log("Login successful: ", Response.data)
        }).catch((error)=>{
            console.error("Login failed: ", error)
        })
    }

    return(
        <div className="w-full h-screen flex justify-center items-center bg-[url('/images.jpg')] bg-center bg-cover">
           <div className="w-1/2 h-full ">
           
           </div>

           <div className="w-1/2 h-full  flex justify-center items-center">
           <div className="w-[400px] h-[500px] backdrop-blur-lg rounded-xl shadow-2xl flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold mb-8 text-secondary">Sign in </h1>
            
            <input
            onChange={
                (e)=>
                    {
                    setEmail(e.target.value)
                }
            }
            value={email}
            type="text" 
            placeholder="Email" 
            className="w-3/4 p-3 mb-6 rounded-lg border border-secondary focus:outline-none focus:ring-2 focus:ring-blue-600 "></input>
            
            <input
            onChange={
                (e)=>
                    {
                    setPassword(e.target.value)
                }
            }
            value={password} 
            type="password" 
            placeholder="password" 
            className="w-3/4 p-3  rounded-lg border border-secondary focus:outline-none focus:ring-2 focus:ring-blue-600 "></input>
           
            <p className="mb-6 w-3/4 text-right text-white">Forget Password? <Link to="/forget-password" className="text-accent ">Clik here</Link></p>
            <button onClick={handleLogin} className="w-3/4 p-3 bg-accent text-white rounded-lg">
            Sign in
            </button>
            <p className="mt-6 w-3/4 text-center text-white">Don't have an account?<Link to="/register" className="text-accent ">Register</Link></p>

           </div>          
           </div>

        </div>
    );
}