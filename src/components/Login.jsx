import React, { useState } from "react";
import "./Login.css";
import bg from "./bg.png";
import logo from "./logoa.png";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const handleSignIn = () => {
        let emailError = "";
        let passwordError = "";

        if (!email) {
            emailError = "Email is required.";
        } else if (!validateEmail(email)) {
            emailError = "Enter a valid email address.";
        }

        if (!password) {
            passwordError = "Password is required.";
        }

        setErrorEmail(emailError);
        setErrorPassword(passwordError);
    };
    return (
        <>
            <div className="Login">
                <div className="bgimage2">
                    <img src={bg} alt="Background" />
                    <div className="navabar2">
                        <div id="logo2">
                            <img src={logo} alt='logo' />
                        </div>
                    </div>
                    <div className="signin2">
                        <div className="signinbox">
                        <h1>Sign In</h1>
                            <input 
                                type="text" 
                                placeholder="Email or mobile number" 
                                id="inp3"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{ border: errorEmail ? "1px solid #C50C0E" : "" }}
                            />
                            <p id="text28" style={{ color: "#C50C0E" }}>{errorEmail}</p>

                            <input 
                                type="password" 
                                placeholder="Password" 
                                id="pass1"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ border: errorPassword ? "1px solid #C50C0E" : "" }}
                            />
                            <p id="text29" style={{ color: "#C50C0E" }}>{errorPassword}</p>

                            <button id="signbtn1" onClick={handleSignIn}>Sign In</button>
                            <p id="text12">OR</p>
                            <button id="signincode">Use a sign-in code</button>
                            <a href="#">Forgot password?</a>
                            <div className="extra1">
                                <input type="checkbox" id="remember" />Remember me
                                <br />
                                <p id="text13">New to Netflix? <Link to="/"><span id="text15">Sign up now.</span></Link></p>
                                <br />
                                <p id="text14">
                                    This page is protected by Google reCAPTCHA to ensure you're not a bot. 
                                    <a href="#" id="text16"> Learn more.</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className='footer2'>
                    <div className="ol5">
                        <a href="#" >Questions? Call 7249280617</a>
                        <ol>
                            <li></li>
                            <li></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">cookie preference</a></li>
                            <li>
                                <select name="" id="language2">
                                    <option value="English">English</option>
                                    <option value="Hindi">Hindi</option>
                                </select>
                            </li>
                        </ol>
                    </div>
                    <div className="ol6">
                        <ol>
                            <li></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Corporate information</a></li>

                        </ol>
                    </div>
                    <div className="ol7">
                        <ol>
                            <li><a href="#">Term of use</a></li>
                        </ol>
                    </div>
                    <div className="ol8">
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
export default Login;