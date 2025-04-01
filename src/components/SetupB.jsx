import React, { useState } from "react";
import logo from "./logoa.png";
import "./SetupB.css";
import { Link, useNavigate } from "react-router-dom";


const SetupB = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const navigate = useNavigate(); // Hook for navigation

    // Email validation function
    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleNextClick = () => {
        let emailMsg = "";
        let passwordMsg = "";

        if (!email) {
            emailMsg = "Email is required.";
        } else if (!isValidEmail(email)) {
            emailMsg = "Enter a valid email address.";
        }

        if (!password) {
            passwordMsg = "Password is required.";
        }

        setEmailError(emailMsg);
        setPasswordError(passwordMsg);

        // Navigate only if there are no errors
        if (!emailMsg && !passwordMsg) {
            navigate("/SetupC");
        }
    };
    return (
        <>
            <div className="mainclass2">
                <div className="SetupB">
                    <div className="navbar4">
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                        <Link to="/Login"id="text21">Sign In</Link>
                    </div>
                    <div className="Step2main">
                        <div className="step2">
                            <p id="text22">STEP 1 OF 4</p>
                            <h1>Create a password to start your membership</h1>
                            <p id="text23">Just a few more steps and you're done!</p>
                            <p id="text24"> We hate paperwork, too.</p>
                            <input
                                type="email"
                                placeholder="Email"
                                id="inp4"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                    border: emailError ? "1px solid rgb(224, 23, 27)" : "1px solid #ccc"
                                }}
                            />
                            <p id="text27" style={{ color: "brown" }}>{emailError}</p>
                            <input
                                type="password"
                                placeholder="Add a Password"
                                id="inp5"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{
                                    border: passwordError ? "1px solid rgb(231, 17, 20)" : "1px solid #ccc"
                                }}
                            />
                            <p id="text26" style={{ color: "brown" }}>{passwordError}</p>
                            <button id="nextbtn2" onClick={handleNextClick}>Next</button>
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
export default SetupB;