import React from "react";
import { useParams } from "react-router-dom";
const Person = () => {
    let params = useParams();
    console.log(params)
    return ( 
        <div>
            person number {params.id}
        </div>
     );
}
 
export default Person;