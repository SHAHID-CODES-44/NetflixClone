import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logoa.png";
import "./SetupE.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import cards from "./cards.png";
import upi from "./upi.png";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";


const SetupE = () => {
    return (
        <>
            <div className="mainclass5">
                <div className="SetupE">
                    <div className="navbar7">
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                        <Link to="/Login"id="text36">Sign Out</Link>
                    </div>
                    <div className="pmtoptions">
                        <div className="fontpart">
                            <FontAwesomeIcon icon={faLock} size="2x" id="symbol4" />
                            <p id="text37">STEP 4 OF 4</p>
                            <h1>Choose how to pay</h1>
                            <p id="text38">Your payment is encrypted and you can change your payment method at anytime.</p>
                            <p id="text39"><b>Secure for peace of mind.</b></p>
                            <p id="text41"><b> Cancel easily online.</b></p>
                        </div>
                        <div className="pmtbuttons">
                            <p id="text40">End-to-end encrypted</p>
                            <Link to="/SetupF"><button id="card">Credit or Debit card
                                <img src={cards} alt="cards" />
                                <FontAwesomeIcon icon={faGreaterThan} id="font4" style={{ color: "black", fontSize: "20px" }} />
{/*  shahid firozabad */}
                            </button></Link>
                            <a href="/SetupG"><button id="upi">UPI AutoPay
                                <img src={upi} alt="upi" />
                                <FontAwesomeIcon icon={faGreaterThan} id="font5" style={{ color: "black", fontSize: "20px" }} />
                            </button></a>
                        </div>
                    </div>
                </div>
                <footer className='footer6'>
                    <div className="ol21">
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
                    <div className="ol22">
                        <ol>
                            <li></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Corporate information</a></li>

                        </ol>
                    </div>
                    <div className="ol23">
                        <ol>
                            <li><a href="#">Term of use</a></li>
                        </ol>
                    </div>
                    <div className="ol24">
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
export default SetupE;