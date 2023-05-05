import React from "react";
import "./main.css";
import { auth } from "../Login/Firebase";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const signOut = () => {
        auth.signOut();
        navigate("/");
    };
    return (
        <>
            <div className="main">
                <p>Home page</p>
                <button onClick={signOut}>signout</button>
            </div>
        </>
    );
};

export default Home;
