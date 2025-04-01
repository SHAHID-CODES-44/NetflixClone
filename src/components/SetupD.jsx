import React from "react";
import "./SetupD.css";
import { Link } from "react-router-dom";
import logo from "./logoa.png";
import { useState } from "react";

const SetupD = () => {
    return (
        <>
            <div className="mainclass4">
                <div className="SetupD">
                    <div className="navbar6">
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                        <a href="/Login" id="text33">Sign Out</a>
                    </div>
                    <div className="opttext">
                        <p id="text34">STEP 1 OF 4</p>
                        <h1>Choose the plan that’s right for you</h1>
                    </div>
                    <div className="options">
                        <div className="opt">
                            <div id="mobile">
                                <p id="text35">Mobile</p>
                                <p>480p</p>
                            </div>
                            <div className="detailstext">
                                <p>Monthly price</p>
                                <h4>₹149</h4>
                                <hr />
                                <p>Video and sound quality</p>
                                <h4> Fair</h4>
                                <hr />
                                <p>Resolution</p>
                                <h4>480p</h4>
                                <hr />
                                <p>Supported devices</p>
                                <h4>Mobile phone, tablet</h4>
                                <hr />
                                <p>Devices your household can watch at the same time</p>
                                <h4>1</h4>
                                <hr />
                                <p>Download devices</p>
                                <h4>1</h4>
                            </div>
                        </div>
                        <div className="opt">
                            <div id="basic">
                                <p id="text35">Basic</p>
                                <p>720p</p>
                            </div>
                            <div className="detailstext2">
                                <p>Monthly price</p>
                                <h4>₹199</h4>
                                <hr />
                                <p>Video and sound quality</p>
                                <h4>Good</h4>
                                <hr />
                                <p>Resolution</p>
                                <h4>720p(HD)</h4>
                                <hr />
                                <p>Supported devices</p>
                                <h4>TV,computer,Mobile phone, tablet</h4>
                                <hr />
                                <p>Devices your household can watch at the same time</p>
                                <h4>1</h4>
                                <hr />
                                <p>Download devices</p>
                                <h4>1</h4>
                            </div>
                        </div>
                        <div className="opt">
                            <div id="standard">
                                <p id="text35">Standard</p>
                                <p>1080p</p>
                            </div>
                            <div className="detailstext3">
                                <p>Monthly price</p>
                                <h4>₹499</h4>
                                <hr />
                                <p>Video and sound quality</p>
                                <h4>Great</h4>
                                <hr />
                                <p>Resolution</p>
                                <h4>1080p(HD)</h4>
                                <hr />
                                <p>Supported devices</p>
                                <h4>TV,computer,Mobile phone, tablet</h4>
                                <hr />
                                <p>Devices your household can watch at the same time</p>
                                <h4>2</h4>
                                <hr />
                                <p>Download devices</p>
                                <h4>2</h4>
                            </div>
                        </div>
                        <div className="opt">
                            <div id="premium">
                                <p id="text35">Premium</p>
                                <p>4K + HDR</p>
                            </div>
                            <div className="detailstext4">
                                <p>Monthly price</p>
                                <h4>₹649</h4>
                                <hr />
                                <p>Video and sound quality</p>
                                <h4>Best</h4>
                                <hr />
                                <p>Resolution</p>
                                <h4>4K(Ultra HD) + HDR</h4>
                                <hr />
                                <p>Supported devices</p>
                                <h4>TV,computer,Mobile phone, tablet</h4>
                                <hr />
                                <p>Devices your household can watch at the same time</p>
                                <h4>4</h4>
                                <hr />
                                <p>Download devices</p>
                                <h4>6</h4>
                            </div>
                        </div>
                    </div>
                    <div className="btmtext">
                        <div className="txtbtm2">
                            <p>
                                HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our <a href="#">Terms of Use</a> for more details.
                            </p>
                            <br />
                            <p>Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</p>
                            <br />
                            <p>Live events are included with any Netflix plan and contain ads.</p>
                        </div>
                        <Link to="/SetupE"><button id="nextbtn4">Next</button></Link>
                    </div>
                </div>
                <footer className='footer5'>
                    <div className="ol17">
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
                    <div className="ol18">
                        <ol>
                            <li></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Corporate information</a></li>

                        </ol>
                    </div>
                    <div className="ol19">
                        <ol>
                            <li><a href="#">Term of use</a></li>
                        </ol>
                    </div>
                    <div className="ol20">
                        <ol>
                            <li></li>
                            <li><a href="#">Privacy</a></li>
                        </ol>
                    </div>
                </footer>
            </div>
        </>
    )
}
export default SetupD;