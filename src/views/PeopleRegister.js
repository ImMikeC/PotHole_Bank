import React from "react";
import Button from "../components/Button";
import "../styles/PeopleRegister.css";

const PeopleRegister = () => {
    document.body.style.backgroundColor = "#1E4A5F"; 
    return (
        <div className="contenedor2 p-5">
            <div className="title">Register</div>
            <div className="row g-3">
                <div class="col-md-12">
                    <label for="inputEmail4" class="form-label">
                        Email
                    </label>
                    <input type="email" class="form-control" id="inputEmail4" />
                </div>
            </div>
            <div className="row g-3">
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">
                        Password
                    </label>
                    <input type="password" class="form-control" id="inputPassword4" />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">
                        Repeat Password
                    </label>
                    <input type="password" class="form-control" id="inputPassword4" />
                </div>
            </div>
            <Button className={"buttonSubmit"} text={"Submit"} />
        </div>
    );
};

export default PeopleRegister;
