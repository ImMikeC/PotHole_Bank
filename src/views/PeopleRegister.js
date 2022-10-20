import React from "react";
import Button from "../components/Button";
import "../styles/PeopleRegister.css";

const PeopleRegister = () => {
  document.body.style.backgroundColor = "#1E4A5F";
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="col-md-6  mb-5 p-5 bg-light">
        <h1 className="text-center text-primary">Register</h1>
        <div className="row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              class="form-control"
              id="inputEmail4"
            />
          </div>
        </div>
        <div className="row g-3">
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              class="form-control"
              id="inputPassword4"
            />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Repeat Password
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              class="form-control"
              id="inputPassword4"
            />
          </div>
        </div>
        <Button className={"buttonSubmit"} text={"Submit"} />
      </div>
    </div>
  );
};

export default PeopleRegister;
