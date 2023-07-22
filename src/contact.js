import React, { useContext } from "react";
import { Menu } from  ".";
import { userContext } from "./context";

export default function Contact(){
    let user = useContext(userContext);
    return (
        <>
        <Menu />
            <h4>{user}</h4>
            <h3> Ubon Ratchathani University</h3>
            <div>
            
            85 Sathonlamark Road<br></br>
            Warin Chamrap District <br></br>
            Ubon Ratchathani <br></br>
            Thailand 34190 <br></br>
            
            </div>
        
        </>
    );
}
