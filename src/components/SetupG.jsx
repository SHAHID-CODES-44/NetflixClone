import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logoa.png";
import "./SetupG.css";
import bhimLogo from "./BHIM.png";
import phonepayLogo from "./phonepay.png";
import gpayLogo from "./Gpay.png";
import paytmLogo from "./paytm.png";
import amazonpayLogo from "./amazonpay.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCaretDown } from "@fortawesome/free-solid-svg-icons";


const options = [
    { name: "BHIM", img: bhimLogo },
    { name: "PayTm", img: paytmLogo },
    { name: "PhonePe", img: phonepayLogo },
    { name: "Amazon Pay", img: amazonpayLogo },
    { name: "G Pay", img: gpayLogo },
];

const SetupG = () => {
    const [selected, setSelected] = useState(null); // Default as "Select your UPI app"
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [upiID, setUpiID] = useState(""); // Store UPI ID input
    const [error, setError] = useState(""); // Store error message

    const handleNextClick = () => {
        if (!upiID.trim()) {
            setError("Please enter a valid UPI ID");
        } else {
            setError("");
            // Proceed with the next steps
            console.log("UPI ID submitted:", upiID);
        }
    };

    return (
        <>
            <div className="mainclass7">
                <div className="SetupG">
                    <div className="navbar9">
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                        <Link to="/Login" id="text43">Sign Out</Link>
                    </div>
                    <div className="upi_container">
                        <div className="upidetails">
                            <p id="text44">STEP 4 OF 4</p>
                            <h1>Set up UPI AutoPay</h1>
                            <p id="text45">You can change this recurring payment any time in your settings.</p>
{/* shahid firozabad's code */}
                            {/* Custom Dropdown with Images */}
                            <div className="custom-dropdown" onClick={() => setDropdownOpen(!dropdownOpen)}>
                                <div className="selected-option">
                                    {selected ? (
                                        <>
                                            <img src={selected.img} alt={selected.name} />
                                            <span>{selected.name}</span>
                                        </>
                                    ) : (
                                        <span>Select your UPI app</span>

                                    )}
                                            <FontAwesomeIcon icon={faCaretDown} className="dropdown-icon" id="dropdownicon"/>

                                </div>
                                {dropdownOpen && (
                                    <div className="dropdown-list">
                                        {options.map((option, index) => (
                                            <div
                                                key={index}
                                                className="dropdown-item"
                                                onClick={() => { setSelected(option); setDropdownOpen(false); }}
                                            >
                                                <img src={option.img} alt={option.name} />
                                                <span>{option.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <input
                                type="text"
                                id="upiid"
                                placeholder="UPI ID"
                                value={upiID}
                                onChange={(e) => setUpiID(e.target.value)}
                            />
                            <p id="error4" style={{ color: "brown" }}>{error}</p> {/* Error message */}
                            <Link to="/SetupH" id="text46">How do I find my UPI ID?</Link>

                            <Link to="/Recovery"><button id="nextbtn7" onClick={handleNextClick}>Next</button></Link>
                        </div>
                    </div>
                </div>
                <footer className='footer7'>
                    <div className="ol25">
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
                    <div className="ol25">
                        <ol>
                            <li></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Corporate information</a></li>
                        </ol>
                    </div>
                    <div className="ol26">
                        <ol>
                            <li><a href="#">Term of use</a></li>
                        </ol>
                    </div>
                    <div className="ol27">
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

export default SetupG;
