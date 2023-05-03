import "./login.css";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import app from "./Firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const navigate = useNavigate();
    const auth = getAuth(app);
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const submitHandler = (e) => {
        e.preventDefault();
        const loginDetails = { email, password };

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                alert("you are login is successful");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                alert(errorCode);
                // ..
            });
        console.log(loginDetails);
        navigate("/");
    };

    return (
        <>
            <div className="login-page-main">
                <div className="login-inputs">
                    <form
                        action=""
                        className="login-input"
                        onSubmit={submitHandler}
                    >
                        <input
                            type="email"
                            className="login-i"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            type="password"
                            className="login-i"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button className="login-submit">login</button>
                        <p className="forget-password">
                            {" "}
                            <Link to="./registration">
                                create new account
                            </Link>{" "}
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
