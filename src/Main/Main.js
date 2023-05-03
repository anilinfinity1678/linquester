import React from "react";
import "./main.css";
import { auth } from "../Login/Firebase";

const Home = () => {
    return (
        <>
            <div className="main">
                <p>Home page</p>
                <button onClick={() => auth.signOut()}>signout</button>
            </div>
        </>
    );
};

export default Home;
