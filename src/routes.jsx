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

const Routee = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/profile/*" element={<Profile />}>
                <Route path="1" element={<Profile1 />} />
                <Route path="2" element={<Profile2 />} />
            </Route>
            <Route path="/Personnel" element={<Personnel />} />
            <Route path="/Person/:id" element={<Person />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
     );
}
 
export default Routee;