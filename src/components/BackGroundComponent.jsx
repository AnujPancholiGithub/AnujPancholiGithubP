import React from "react";
import Home from "./Home";
import AboutComponent from "./About"
import Navbar from "./Navbar";
import Resume from "./Resume";
import Test from "./Test";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function BackGroundComponent() {
    let backgroundImage = "https://imgpile.com/images/hivnrj.jpg";
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})` }} className="bg-no-repeat" >
            <div className="z-50 ">
                <div className="container">
                    <Navbar />
                    <BrowserRouter>
                        <Routes>
                            <Route exact path="home/homePage" element={<Home />} />
                            <Route path="home/about" element={<AboutComponent />} />
                            <Route path="home/resume" element={<Resume />} />
                            <Route path="home/test" element={<Test />} />
                        </Routes>
                    </BrowserRouter>

                </div>
            </div>
        </div>

    )
}
export default BackGroundComponent;