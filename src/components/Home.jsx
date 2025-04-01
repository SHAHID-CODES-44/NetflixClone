import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import squid from "./squid.png";
import logo from "./logoa.png";
import Bhaskar from "./bhaskar.png";
import blackpanther from "./blackpanter.png";
import AvengerA from "./AvengerA.png";
import Bholayya from "./bhoolayya.png";
// import Avengersfirst from "./Avengersfirst.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell, faFaceSmile } from "@fortawesome/free-solid-svg-icons";

const movies = [
    {
        id: 1,
        title: "Avengers",
        image: AvengerA,
        link: "https://www.imdb.com/title/tt0848228/"
    },
    {
        id: 2,
        title: "squid Game",
        image: squid,
        link: "https://www.imdb.com/title/tt0371746/"
    },
    {
        id: 3,
        title: "Bhaskar",
        image: Bhaskar,
        link: "https://www.imdb.com/title/tt1211837/"
    },
    {
        id: 4,
        title: "Black Panther",
        image: blackpanther,
        link: "https://www.imdb.com/title/tt1825683/"
    },
    {
        id: 5,
        title: "Bhool bolayya",
        image: Bholayya,
        link: "https://www.imdb.com/title/tt4154796/"
    },
];

const Home = () => {
    const [selectedMovie, setSelectedMovie] = useState(movies[0]);

    return (
        <div className="mainclass9">
            <div className="Home">
                {/* Navbar */}
                <div className="navbar11">
                    <div className="leftside">
                        <img src={logo} alt="logo" />
                        <Link to="/Home">Home</Link>
                        <Link>TV Shows</Link>
                        <Link>Movies</Link>
                        <Link>New & Popular</Link>
                        <Link>My List</Link>
                        <Link>Browse By Languages</Link>
                    </div>

                    <div className="rightside">
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className="search-icon"
                            size="2x"
                        />
                        <FontAwesomeIcon icon={faBell} className="bell-icon" size="2x" />
                        <FontAwesomeIcon icon={faFaceSmile} className="smile-icon" size="2x" />
                    </div>
                </div>
                {/* End Navbar */}

                {/* Movie Details Section */}
                <div className="moviedetails-section">
                    <a href={selectedMovie.link} target="_blank" rel="noopener noreferrer">
                        <img src={selectedMovie.image} alt={selectedMovie.title} id="Avenger1" />
                    </a>
                    <h2 id="text80">My List</h2>

                    {/* My List Section */}
                    <div className="My-List">
                        {movies.map((movie) => (
                            <div key={movie.id} id="Movie1" onClick={() => setSelectedMovie(movie)}>
                                <img src={movie.image} alt={movie.title} className="movie-img" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;