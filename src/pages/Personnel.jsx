import { NavLink } from "react-router-dom";
import React from "react";
const Personnel = () => {
    const personnel=[
        {id:1,name:"Ali"},
        {id:2,name:"Javad"},
        {id:3,name:"Zahed"},
    ]
    return ( 
        <div>
            {personnel.map(item=>{
                return <NavLink key={item.id} to={`/person/${item.name}`}>{item.name}</NavLink>
            })}
        </div>
     );
}
 
export default Personnel;