import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import "./SetupH.css";
import { Link } from "react-router-dom";

const SetupH = () => {
    return (
        <>
            <div className="mainclass8">
                <div className="SetupH">
                    <div className="stepsforupiid">
                        <h1>Find your UPI ID</h1>
                        <div id="step1upi">
                            <FontAwesomeIcon icon={faMobileScreen} size="2x" id="upiiconfont" />
                            <p id="steptext">Go to the app linked to your UPI ID.</p>
                        </div>
                        <div id="step2upi">
                            <FontAwesomeIcon icon={faMobileScreen} size="2x" id="upiiconfont" />
                            <p id="steptext">Tap your profile or settings menu.</p>
                        </div>
                        <div id="step3upi">
                            <FontAwesomeIcon icon={faMobileScreen} size="2x" id="upiiconfont" />
                            <p id="steptext">Find your ID under “UPI ID”.</p>
                        </div>
                        <div id="step4upi">
                            <FontAwesomeIcon icon={faMobileScreen} size="2x" id="upiiconfont" />
                            <p id="steptext">Copy your UPI ID and paste it on Netflix to finish the payment set up.</p>
                        </div>
                       <Link to="/SetupG"><button id="closebtn2">Close</button></Link> 
                    </div>
                </div>
            </div>
        </>
    )
};

export default SetupH;