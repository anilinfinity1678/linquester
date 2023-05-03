import Login from "./Login/Login";
import React, { useEffect, useState } from "react";
import Registration from "./Registration/Registration";
import Home from "./Home/Home";
import { auth } from "./Login/Firebase";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav/Nav";
function App() {
    const [presentUser, setPresentUser] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setPresentUser({
                uid: user.id,
                email: user.email,
            });
        });
    }, []);
    return (
        <>
            <Nav />
            <Routes>
                <Route
                    path="/"
                    element={
                        presentUser ? (
                            <Home presentUser={presentUser} />
                        ) : (
                            <Login />
                        )
                    }
                ></Route>
                <Route
                    path="/login/registration"
                    element={<Registration />}
                ></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </>
    );
}

export default App;
