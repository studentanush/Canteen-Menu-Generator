import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import AdminPage from "./AdminPage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AdminLogin = ()=>{
    const[name,setName] = useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate();
    
    const[loading,setLoading] = useState(false);

    const onSubmitHandler = async(e)=> {
        setLoading(true);
        e.preventDefault();
        try {
            const formdata = new FormData();
            //formdata.append("name",name);
            console.log(name);
            
            if(password == "404"){
                
                const response = await axios.post("http://localhost:4000/api/adminlogin", {
                    name: name
                });
                if(response){
                    navigate("/admin-page")
                    toast.success("Successfully login..");
                    setName("");
                    setPassword("");
                    
                }
            }else{
                toast.error("Incorrect password..😁");
            }
            
            
        } catch (error) {
            toast.error("Error Occured");
        }
        setLoading(false);
        
    }
    
    return loading? (
        <div className="grid place-items-center min-h-[100vh]">
            <div className="w-14 h-14 place-self-center border-4 border-gray-400 border-t-blue-800 rounded-full animate-spin"></div>
        </div>
    ) : ( (<form onSubmit={onSubmitHandler} className=" h-screen grid place-content-center text-gray-600 ">
            <div className=" w-120 h-80 bg-white shadow-[0_0_12px_rgba(0,0,0,0.1)] rounded-b-md gap-8 flex flex-col">
                <p className="text-black font-bold flex justify-center mt-7 text-2xl">Admin Login</p>
                <div className="flex justify-center items-center">
                    <input onChange={(e)=>setName(e.target.value)} value={name} className="border-2 border-gray-700 w-80 h-9 pl-5 rounded-sm" type="text" required placeholder="Name" />
                </div>
                <div className="flex justify-center items-center">
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} className=" border-2 border-gray-700 w-80 h-9 pl-5 rounded-sm" type="password" required placeholder="Password" />
                </div>
                <div className="flex justify-center items-center">
                    <button className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
    border-blue-600
    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
    active:border-b-[2px] active:brightness-90 active:translate-y-[2px] w-80 h-10 " type="submit">Login</button>
                </div>
                
                
            </div>
        </form>)
      )
}
export default AdminLogin