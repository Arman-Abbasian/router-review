import { Link, NavLink } from "react-router-dom";
import React from "react";
import { useState } from "react";
const Personnel = () => {
    const [data,setData]=useState({age:15})
    const personnel=[
        {id:1,name:"Ali"},
        {id:2,name:"Javad"},
        {id:3,name:"Zahed"},
    ]
    return ( 
        <div>
            {personnel.map(item=>{
                return <Link key={item.id} to={`/Person/${item.name}`}  state={data} >{item.name}</Link>
            })}
        </div>
     );
}
 
export default Personnel;