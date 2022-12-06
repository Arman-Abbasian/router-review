import { Routes,Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Profile from './pages/Profile';
import React from "react";
import NotFound from "./pages/NotFound";
import Personnel from "./pages/Personnel";
import Person from "./pages/Person";
import Profile1 from './pages/Profile1';
import Profile2 from './pages/Profile2';



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
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/profile/*" element={<Profile />}>
                <Route path="1" element={<Profile1 />} />
                <Route path="2" element={<Profile2 />} />
            </Route>
            <Route path="/*" element={<NotFound />} />
            <Route path="/Personnel" element={<Personnel />} />
            <Route path="/Person" element={<Person />} />
        </Routes>
     );
}
 
export default Routee;