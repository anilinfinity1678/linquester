import "./home.css";
import React from "react";
import { Link } from "react-router-dom";
import Working from "../LandingPage/Working/Working";
const Home = () => {
    // const navigate = useNavigate();
    // const submitHandler = () => {
    //     navigate("");
    // };

    return (
        <>
            <header>{/* nav bar */}</header>

            <section className="home">
                <div className="hero">
                    <div className="left">
                        <div className="text">
                            <h2>
                                Lets{" "}
                                <span className="text-H">
                                    Build and Collaborate
                                </span>{" "}
                                together with linquester
                            </h2>
                            <p>
                                Harnessed the productivity. Developed for the
                                collaboration. welcome to the platform where you
                                find the right teammates for the upcoming
                                projects
                            </p>
                        </div>
                        <div className="button">
                            <button className="sig">
                                <Link to="/login/registration">
                                    {" "}
                                    Signin now
                                </Link>
                            </button>
                            <button className="learn">Learn more</button>
                        </div>
                    </div>
                    <div className="right">
                        <img
                            src={require("../assets/images/herolin.gif")}
                            alt="hero.bgm"
                        />
                    </div>
                </div>
                <Working />
            </section>
        </>
    );
};

export default Home;
