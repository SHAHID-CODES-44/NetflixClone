import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logoa.png";
import "./SetupF.css";
import cards from "./cards.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";

const SetupF = () => {
    return (
        <>
            <div className="mainclass6">
                <div className="SetupF">
                    <div className="navbar8">
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                        <Link to="/Login" id="text42">Sign Out</Link>
                    </div>
                    <div className="cardpayments">
                        <div className="carddetails">
                            <p id="text47">STEP 4 OF 4</p>
                            <h1>Set up your credit or debit card</h1>
                            <img src={cards} alt="cards" id="cardimg" />
                            <div className="input-container">
                                <input type="text" id="cardnum" placeholder="Card number" />
                                <FontAwesomeIcon icon={faCreditCard} className="input-icon" />
                            </div>
                            <div className="twoinpts">
                                <input type="text" id="expd" placeholder="Expiry date" />
                                <input type="text" id="cvv" placeholder="CVV" />
                            </div>
                            <input type="text" id="name" placeholder="Name on card" />
                            <div className="plandetails">
                                <p><b>₹199</b></p>
                                <p><u>basic</u></p>
                                <Link to="/SetupD">Change</Link>
                            </div>
                            <div className="extratext">
                                <p id="text48">Any payment above ₹ 2000 shall need additional authentication.</p>
                                <p id="text49">By checking the checkbox below, you agree to our Terms of Use, Privacy Statement, and that you are over 18. Netflix will automatically continue your membership and charge the membership fee (currently ₹199/month) to your payment method until you cancel. You may cancel at any time to avoid future charges.</p>
                                <div className="final">
                                    <div className="condition">
                                        <input type="checkbox" id="agree" />I agree
                                    </div>
                                    <Link to="/Recovery"><button id="start2">Start Membership</button></Link>
                                    <p id="text50">This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer */}
                <footer className='footer8'>
                    <div className="ol28">
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
                    <div className="ol29">
                        <ol>
                            <li></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Corporate information</a></li>
                        </ol>
                    </div>
                    <div className="ol30">
                        <ol>
                            <li><a href="#">Term of use</a></li>
                        </ol>
                    </div>
                    <div className="ol31">
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

export default SetupF;