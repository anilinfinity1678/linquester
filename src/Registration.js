import "./registration.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    getAuth,
    createUserWithEmailAndPassword,
    // sendEmailVerification,
} from "firebase/auth";
import { db } from "../Login/Firebase";
import { doc, setDoc } from "firebase/firestore";

const Registration = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmpass, setConfirmpass] = useState("");
    const [prof, setProf] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        const data = {
            userName: userName,
            email: email,
            prof: prof,
        };

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                const userRef = doc(db, "users", user.uid);

                setDoc(userRef, data, {
                    merge: true,
                })
                    .then(() => {
                        console.log("User data written to Firestore");
                    })
                    .catch((error) => {
                        console.error(
                            "Error writing user data to Firestore: ",
                            error
                        );
                    });

                navigate("/login");
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(error.code);
                if (errorCode === "auth/email-already-in-use") {
                    alert(
                        "This email is already registered. Please use a different email or login using this email."
                    );
                } else {
                    console.log(error.message);
                }
            });
    };

    // const submit = () => {
    //     alert("Register successful");
    // };

    return (
        <>
            <div className="sign-page">
                <div className="sign-l">
                    <img
                        src={require("../assets/53882-distance-education.gif")}
                        alt=""
                        className="sign-up-vector"
                    />
                </div>
                <div className="sign-right">
                    <div className="sign">
                        <form className="sign-up" onSubmit={submitHandler}>
                            <div className="detail-box">
                                {" "}
                                <p className="detail">Name</p>
                                <input
                                    required
                                    value={userName}
                                    onChange={(e) =>
                                        setUserName(e.target.value)
                                    }
                                    type="name"
                                    className="sign-up-details"
                                />
                            </div>

                            <div className="detail-box">
                                <p className="detail">Email</p>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="sign-up-details"
                                />
                            </div>
                            <div className="detail-box">
                                <p className="detail">Password</p>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="sign-up-details"
                                />
                            </div>
                            <div className="detail-box">
                                <p className="detail">Confirm password</p>

                                <input
                                    required
                                    type="password"
                                    value={confirmpass}
                                    onChange={(e) =>
                                        setConfirmpass(e.target.value)
                                    }
                                    className="sign-up-details"
                                />
                            </div>
                            <div className="detail-box">
                                <p className="detail">Profession</p>

                                <input
                                    required
                                    type="text"
                                    value={prof}
                                    onChange={(e) => setProf(e.target.value)}
                                    className="sign-up-details"
                                />

                                {/* <Job /> */}
                            </div>

                            <button className="sign-up-submit" type="submit">
                                submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;
