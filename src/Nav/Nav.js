import "./nav.css";
import { Link } from "react-router-dom";
import React from "react";
const Nav = () => {
    return (
        <>
            <div className="nav">
                <Link to="/login ">Login</Link>
            </div>
        </>
    );
};

export default Nav;
