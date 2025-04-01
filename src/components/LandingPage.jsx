import React, { useState } from 'react';
import "./LandingPage.css";
import bg from "./bg.png";
import logo from "./logoa.png";
import pushpa from "./pushpa.png";
import squid from "./squid.png";
import bhasker from "./bhaskar.png";
import bhool from "./bhoolayya.png";
import venom from "./venom.png";
import mismatched from "./mismatched.png";
import amaran from "./amaran.png";
import devara from "./devara.png";
import warrant from "./black.png";
import kitty from "./kitty.png";
import scope from './scope.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile, faCircleDown } from "@fortawesome/free-regular-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import Login from './Login';

const LandingPage = () => {
    const [isOpen, setIsOpen] = useState(Array(6).fill(false)); // State for managing FAQ toggles

    const toggleAnswer = (index) => {
        const newState = [...isOpen];
        newState[index] = !newState[index];
        setIsOpen(newState);
    };
    
    return (
        <>
            <div className="LandingPage">
                <div className="bgimage">
                    <img src={bg} alt="Background" />
                    <div className="navabar">
                        <div id="logo">
                            <img src={logo} alt='logo' />
                        </div>
                        <div id="buttons1">
                            <select name="" id="language">
                                <option value="English">English</option>
                                <option value="Hindi">Hindi</option>
                            </select>
                            <Link to="/Login"><button id='signin'>Sign in</button></Link>
                        </div>
                    </div>
                    <div className="middlepart">
                        <h1 id='text1'>Unlimited movies, TV shows and more</h1>
                        <h2 id='text2'>Starts at ₹149. Cancel at any time.</h2>
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                        <div className="signup-container">
                            <input type="email" placeholder='Email address' id='inp1' />
                            <Link to="/SetupA"><button id='getstarted'>Get Started</button></Link>
                        </div>
                    </div>
                </div>
                <div className="bottompart">
                    <h2 id='text3'>Trending Now</h2>
                    <div className="cards-wrapper">
                        <div className="moviecards">
                            <div id="card1">
                                <img src={pushpa} alt="rank1" />
                            </div>
                            <div id="card1">
                                <img src={squid} alt="rank2" />
                            </div>
                            <div id="card1">
                                <img src={bhasker} alt="rank3" />
                            </div>
                            <div id="card1">
                                <img src={bhool} alt="rank4" />
                            </div>
                            <div id="card1">
                                <img src={venom} alt="rank5" />
                            </div>
                            <div id="card1">
                                <img src={mismatched} alt="rank6" />
                            </div>
                            <div id="card1">
                                <img src={amaran} alt="rank7" />
                            </div>
                            <div id="card1">
                                <img src={devara} alt="rank8" />
                            </div>
                            <div id="card1">
                                <img src={warrant} alt="rank9" />
                            </div>
                            <div id="card1">
                                <img src={kitty} alt="rank10" />
                            </div>
                        </div>
                    </div>
                    <div className="infocards">
                        <h2 id='text4'>More reasons to join</h2>
                        <div className="reasons">
                            <div id="card2">
                                <h2 id="text5">Enjoy on your TV</h2>
                                <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                                <FontAwesomeIcon icon={faTv} size="3x" id="icon1" />
                            </div>
                            <div id="card2">
                                <h2 id="text5">Download your shows to watch offline</h2>
                                <p>Save your favourites easily and always have something to watch.</p>
                                <FontAwesomeIcon icon={faCircleDown} size="3x" id="icon2" />
                            </div>
                            <div id="card2">
                                <h2 id="text5">Watch everywhere</h2>
                                <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                                <img src={scope} alt="rank5" id='icon3' />
                            </div>
                            <div id="card2">
                                <h2 id="text5">Create profiles for kids</h2>
                                <p>Send kids on adventures with their favourite characters in a space made just for them — free with your membership.</p>
                                <FontAwesomeIcon icon={faFaceSmile} size="3x" id="icon4" />
                            </div>
                        </div>
                    </div>
                    <div className="FAQS">
                        <br />
                        <br />
                        <h2 id='text6'>Frequently Asked Questions</h2>
                        <div className="questions">
                            {/* FAQ 1 */}
                            <div id="q1" className="question">
                                <div className="question-header" onClick={() => toggleAnswer(0)}>
                                    <h2>What is Netflix?</h2><p id='text7'>+</p>
                                </div>
                                {isOpen[0] && (
                                    <div className="answer">
                                        <p>
                                            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more – on thousands of internet-connected devices.
                                        </p>
                                        <br />
                                        <br />
                                        <p>
                                            You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* FAQ 2 */}
                            <div id="q2" className="question">
                                <div className="question-header" onClick={() => toggleAnswer(1)}>
                                    <h2>How much does Netflix cost?</h2><p id='text7'>+</p>
                                </div>
                                {isOpen[1] && (
                                    <div className="answer">
                                        <p>
                                            Watch Netflix on your smartphone, tablet, smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* FAQ 3 */}
                            <div id="q3" className="question">
                                <div className="question-header" onClick={() => toggleAnswer(2)}>
                                    <h2>Where can I watch?</h2><p id='text7'>+</p>
                                </div>
                                {isOpen[2] && (
                                    <div className="answer">
                                        <p>
                                            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players, and game consoles.
                                        </p>
                                        <br />
                                        <br />
                                        <p>
                                            You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* FAQ 4 */}
                            <div id="q4" className="question">
                                <div className="question-header" onClick={() => toggleAnswer(3)}>
                                    <h2>How do I cancel?</h2><p id='text7'>+</p>
                                </div>
                                {isOpen[3] && (
                                    <div className="answer">
                                        <p>
                                            Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* FAQ 5 */}
                            <div id="q5" className="question">
                                <div className="question-header" onClick={() => toggleAnswer(4)}>
                                    <h2>What can I watch on Netflix?</h2><p id="text7">+</p>
                                </div>
                                {isOpen[4] && (
                                    <div className="answer">
                                        <p>
                                            Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* FAQ 6 */}
                            <div id="q6" className="question">
                                <div className="question-header" onClick={() => toggleAnswer(5)}>
                                    <h2>Is Netflix good for kids?</h2><p id='text7'>+</p>
                                </div>
                                {isOpen[5] && (
                                    <div className="answer">
                                        <p>
                                            The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                                        </p>
                                        <br />
                                        <br />
                                        <p>
                                            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="text9">
                        <p><b>Ready to watch? Enter your email to create or restart your membership.</b></p>
                    </div>
                    <div className="signup2">
                        <input type="email" placeholder='Email Address' id='inp2' />
                        <Link to="/SetupA"><button id='getstarted2'>Get Started</button></Link>
                    </div>
                    <footer className='footer'>
                        <div className="ol1">
                            <a href="#" >Questions? Call 7249280617</a>
                            <ol>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Investor Relations</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Speed Test</a></li>
                                <li>
                                    <select name="" id="language2">
                                        <option value="English">English</option>
                                        <option value="Hindi">Hindi</option>
                                    </select>
                                </li>
                                <li id='text11'>Netflix India</li>
                            </ol>
                        </div>
                        <div className="ol2">
                            <ol>
                                <li></li>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#">Cookie Preference</a></li>
                                <li><a href="#">Legal Notices</a></li>
                            </ol>
                        </div>
                        <div className="ol3">
                            <ol>
                                <li></li>
                                <li><a href="#">Account</a></li>
                                <li><a href="#">Way to Watch</a></li>
                                <li><a href="#">Corporate Information</a></li>
                                <li><a href="#">Only on Netflix</a></li>
                            </ol>
                        </div>
                        <div className="ol4">
                            <ol>
                                <li></li>
                                <li><a href="#">Media Centre</a></li>
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ol>
                        </div>
                    </footer>
                </div>
            </div>

        </>
    );
}

export default LandingPage;