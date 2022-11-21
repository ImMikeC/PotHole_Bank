import React from 'react';
import "../styles/About.css";

const About = () => {
    document.body.style.backgroundColor = "#1E4A5F";
    return (
        <div className="about">
            <div className="d-flex flex-row">
                <div className="col-md abouttitle">
                    <h2>About us</h2>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="card aboutcard">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src="./assets/img/RoadAbout.jpg" className="img-fluid rounded-start" alt="About us"/>
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <p className="card-text aboutcardtext">We are an enterprise dedicated to create a pothole databank updated in real time of bumps on the streets of our city. With us you can report potholes to be repair and keep track of their status thanks to the collaboration of municipalities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
