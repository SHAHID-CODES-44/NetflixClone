import React from "react";
import './SetupC.css'
import logo from "./logoa.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const SetupC = () => {
    return (
        <>
            <div className="mainclass3">
                <div className="SetupC">
                    <div className="navbar5">
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                        <Link to="/Login"id="text30">Sign Out</Link>
                    </div>
                    <div className="Step3main">
                        <div className="step3">
                            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "red", fontSize: "45px" }} />
                            <p id="text31">STEP 3 OF 4</p>
                            <h1 id="text32">Choose your plan.</h1>
                            <div className="checkings">
                                <div id="check1">
                                    <FontAwesomeIcon icon={faCheck} style={{ color: "red", fontSize: "24px" }} /><p>
                                        No commitments, cancel anytime.
                                    </p>
                                </div>
                                <div id="check1">
                                    <FontAwesomeIcon icon={faCheck} style={{ color: "red", fontSize: "24px" }} />
                                    <p>
                                        Everything on Netflix for one low price.
                                    </p>
                                </div>
                                <div id="check1">
                                    <FontAwesomeIcon icon={faCheck} style={{ color: "red", fontSize: "24px" }} />
                                    <p>No ads and no extra fees. Ever.</p>
                                </div>
                            </div>
                            <Link to="/SetupD"><button id="nextbtn3">Next</button></Link>
                        </div>
                    </div>
                    <footer className='footer4'>
                        <div className="ol13">
                            <a href="#" id="text25">Questions? Call 7249280617</a>
                            <ol>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">cookie preference</a></li>
                                <li>
                                    <select name="" id="language4">
                                        <option value="English">English</option>
                                        <option value="Hindi">Hindi</option>
                                    </select>
                                </li>
                            </ol>
                        </div>
                        <div className="ol14">
                            <ol>
                                <li></li>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Corporate information</a></li>

                            </ol>
                        </div>
                        <div className="ol15">
                            <ol>
                                <li><a href="#">Term of use</a></li>
                            </ol>
                        </div>
                        <div className="ol16">
                            <ol>
                                <li></li>
                                <li><a href="#">Privacy</a></li>
                            </ol>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}
export default SetupC;