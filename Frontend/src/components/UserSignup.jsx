
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function UserSignup() {
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[loading,setloading] = useState(false);
    const navigate = useNavigate();
    
    const onSubmitHandler = async(e)=>{
        e.preventDefault();
        setloading(true);
        try {
            const formdata = FormData();
            formdata.append("name",name);
            formdata.append("email",email);
            formdata.append("password",password);
            const response = 0;//fetch backend API
        } catch (error) {
            toast.error("")
        }
    }
  return loading? (
    <div className="grid place-items-center min-h-[80vh]">
        <div className="w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin"></div>
    </div>
) : (
    <form onSubmit={onSubmitHandler} className=" h-screen grid place-content-center text-gray-600 ">
        <div className=" w-120 h-90 bg-white shadow-[0_0_12px_rgba(0,0,0,0.1)] rounded-b-md gap-6 flex flex-col">
            <p className="text-black font-bold flex justify-center mt-7 text-2xl">Signup</p>
            <div className="flex justify-center items-center">
                <input onChange={(e)=>setName(e.target.value)} value={name} className="border-2 border-gray-700 w-80 h-9 pl-5 rounded-sm" type="text" required placeholder="Name" />
            </div>
            <div className="flex justify-center items-center">
                <input onChange={(e)=>setEmail(e.target.value)} value={email} className="border-2 border-gray-700 w-80 h-9 pl-5 rounded-sm" type="email" required placeholder="Email" />
            </div>
            <div className="flex justify-center items-center">
                <input onChange={(e)=>setPassword(e.target.value)} value={password} className=" border-2 border-gray-700 w-80 h-9 pl-5 rounded-sm" type="password" required placeholder="Password" />
            </div>
            <div className="flex justify-center items-center">
                <button className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] w-80 h-10 " type="submit">Signup</button>
            </div>
            <div className="flex justify-center">
                <p className="text-black">Already have an account?</p>
                <p onClick={()=>navigate("/student-login")} className="text-blue-400 font-medium cursor-pointer"> login</p>
            </div>
            
        </div>
    </form>
  )
}