import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import logo from "./logoa.png";
import "./Recovery.css";

const Recovery = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // Initialize navigate

    const handleSubmit = () => {
        if (!phoneNumber.trim()) {
            setError("Enter a valid mobile number");
        } else {
            setError(""); // Clear error
            alert("Successfully stored.");
            navigate("/Home"); // Navigate after alert
        }
    };

    return (
        <>
            <div className="mainclass8">
                <div className="Accrecover">
                    <div className="navbar10">
                        <img src={logo} alt="logo" />
                        <a href="#" id="helptxt">Help</a>
                    </div>
                    <div className="register">
                        <div className="registerstart">
                            <h1 id="text55">Welcome to Netflix!</h1>
                            <p id="text51">
                                You've started your membership, and we've emailed the details to shahidfirozaba@gmail.com.
                            </p>
                            <p id="text52">Remember you can cancel any time in the Account section.</p>
                            <div className="phone_no">
                                <p id="text53">Set up password recovery</p>
                                <p id="text54">
                                    Your phone number will be used to help you to access and recover your account. Message and data rates may apply.
                                </p>
                                <input 
                                    type="text" 
                                    id="numinput" 
                                    placeholder="+91 Mobile phone number"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                                {error && <p style={{ color: "brown", fontSize: "15px" }} id="text58">{error}</p>}
                                {/* Error Message */}
                            </div>
                            <button id="nextbtn8" onClick={handleSubmit}>Next</button>
                        </div>
                    </div>
                    <footer className="footer9">
                        <div className="ol32">
                            <a href="#" id="text25">Questions? Call 7249280617</a>
                            <ol>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Cookie Preference</a></li>
                                <li>
                                    <select id="language4">
                                        <option value="English">English</option>
                                        <option value="Hindi">Hindi</option>
                                    </select>
                                </li>
                            </ol>
                        </div>
                        <div className="ol33">
                            <ol>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Corporate Information</a></li>
                            </ol>
                        </div>
                        <div className="ol34">
                            <ol>
                                <li><a href="#">Terms of Use</a></li>
                            </ol>
                        </div>
                        <div className="ol35">
                            <ol>
                                <li><a href="#">Privacy</a></li>
                            </ol>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default Recovery;
