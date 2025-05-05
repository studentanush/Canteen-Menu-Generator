import { createContext, useState } from "react";

export const ContextAPI = createContext();
const Context = (props)=>{
    const [name, setName] = useState("bro");
    const [pdfUrl, setPdfUrl] = useState("");
    return (
        <div>
            <ContextAPI.Provider value={{
                name:name,
                setName:setName,
                pdfUrl:pdfUrl,
                setPdfUrl:setPdfUrl
            }}>
                {props.children}
            </ContextAPI.Provider>


        </div>
    )
}
export default Context