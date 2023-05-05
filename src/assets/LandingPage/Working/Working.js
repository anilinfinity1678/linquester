import "./working.css";
import React from "react";

const Working = () => {
    return (
        <>
            <main>
                <section className="appUse" id="working">
                    {/* <div className="main">
                        <div className="wh">
                            <h2>5 Simple steps to find your Ally</h2>
                            <p>
                                These are the few simple step method to find
                                your ally and network with them to build your
                                successful project
                            </p>
                        </div>
                        <div className="l">
                            <div className="lp">
                                <img
                                    src={require("../../assets/images/working.gif")}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div> */}
                    <div className="main">
                        <div className="l">
                            <h2>
                                Find the different people in diverse fields in
                                one click
                            </h2>
                            <p>
                                It is the best platform that we can share our
                                ideas and find the people in various fields and
                                to collaborate with single message.
                            </p>
                        </div>
                        <div className="img1">
                            <img
                                src={require("../../assets/images/hero.png")}
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="mainc">
                        <div className="l">
                            <h2>Choose with whom you want to work</h2>
                            <p>
                                Here you have a choice to choose the person with
                                whom you want to work and you can collaborate
                                with then to build your projects and great
                                startup.
                            </p>
                        </div>
                        <div className="img2">
                            <img
                                src={require("../../assets/images/ally.png")}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="cap">
                        <h2>
                            Join your colleagues,friends and classmates on
                            linquester
                        </h2>
                        <button>Get started</button>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Working;
