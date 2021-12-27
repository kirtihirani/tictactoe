import React from "react";
import {FaTimes, FaPen, FaRegCircle} from 'react-icons/fa'
const Icon =({name}) =>{
    // return(
    //     // <div>
    //     //     <h1><FaTimes className="icon"/></h1>
    //     //     <h1><FaPen className="icon"/></h1>
    //     //     <h1><FaRegCircle className="icon"/></h1>
    //     // </div>
    // ) 

    switch (name){
        case "circle" : 
            return <FaRegCircle className="icon" />;
        case "cross" :
            return <FaTimes className="icons" />
        default:
            return <FaPen className="icons" />
        
    }

}

export default Icon;