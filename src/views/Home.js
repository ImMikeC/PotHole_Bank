import React from "react";
import Showcase from "../components/Showcase";
import "../styles/Home.css";

const Home = () => {
    document.body.style.backgroundColor = "#1E4A5F";
    return (
        <div className="home">
            <div className="row">
                <div className="col-md-6 showcase">
                    <Showcase />
                </div>
                <div className="col-md-6 homeinterest">
                    <div className="row">
                        <div className="col-md-3 homecard">
                            <h1>Title</h1>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde explicabo enim rem odio assumenda?
                            </p>
                        </div>
                        <div className="col-md-3 homecard">
                            <h1>Title</h1>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde explicabo enim rem odio assumenda?
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 homecard">
                            <h1>Title</h1>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde explicabo enim rem odio assumenda?
                            </p>
                        </div>
                        <div className="col-md-3 homecard">
                            <h1>Title</h1>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde explicabo enim rem odio assumenda?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
