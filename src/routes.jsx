import { Routes,Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Profile from './pages/Profile';
import React from "react";
import NotFound from "./pages/NotFound";
import Personnel from "./pages/Personnel";
import Person from "./pages/Person";
const routes=[
    {id:1,path:"/",element:<Home />},
    {id:2,path:"/about-us",element:<AboutUs />},
    {id:3,path:"/profile",element:<Profile />},
    {id:4,path:"/*",element:<NotFound />},
    {id:5,path:"/Personnel",element:<Personnel />},
    {id:6,path:"/Person/:id",element:<Person />}
];
const Routee = () => {
    return ( 
        <Routes>
            {routes.map(item=>{
                return <Route key={item.id} path={item.path} element={item.element} />
            })}
        </Routes>
     );
}
 
export default Routee;