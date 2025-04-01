import React from "react";
import "./SetupA.css";
import logo from "./logoa.png";
import { Link } from "react-router-dom";
import Step1Img from "./Step1.png";

const SetupA = () => {
    return (
        <>
            <div className="mainclass">
                <div className="SetupA">
                    <div className="navbar3">
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                        <Link to="/Login"id="text17">Sign In</Link>
                    </div>
                    <div className="Step1main">
                        <div className="step1">
                            <img src={Step1Img} alt="image" />
                            <p id="text18">STEP 1 OF 4</p>
                            <h1>Finish setting up your account</h1>
                            <p id="text19">Netflix is personalised for you. Create a password to watch on any device at any time.</p>
                            <Link to="/SetupB"><button id="nextbtn1">Next</button></Link>
                        </div>
                    </div>
                    <footer className='footer3'>
                        <div className="ol9">
                            <a href="#" id="text20">Questions? Call 7249280617</a>
                            <ol>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">cookie preference</a></li>
                                <li>
                                    <select name="" id="language3">
                                        <option value="English">English</option>
                                        <option value="Hindi">Hindi</option>
                                    </select>
                                </li>
                            </ol>
                        </div>
                        <div className="ol10">
                            <ol>
                                <li></li>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Corporate information</a></li>

                            </ol>
                        </div>
                        <div className="ol11">
                            <ol>
                                <li><a href="#">Term of use</a></li>
                            </ol>
                        </div>
                        <div className="ol12">
                            <ol>
                                <li></li>
                                <li><a href="#">Privacy</a></li>
                            </ol>
                        </div>
                    </footer>
                </div >
            </div>
        </>
    )
}
export default SetupA;