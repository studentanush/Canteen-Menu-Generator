import { createContext, useState } from "react";

export const ContextAPI = createContext();
const Context = (props)=>{
    const [name, setName] = useState("Anonymos");
    
    
    return (
        <div>
            <ContextAPI.Provider value={{
                name:name,
                setName:setName,
                
                
            }}>
                {props.children}
            </ContextAPI.Provider>


        </div>
    )
}
export default Context