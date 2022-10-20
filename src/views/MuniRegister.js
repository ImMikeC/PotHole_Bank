import React from "react";
import Button from "../components/Button";
import "../styles/MuniRegister.css";

<<<<<<< HEAD
const MuniRegister = () => {
  document.body.style.backgroundColor = "#0e66a3";
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="col-md-6  mb-5 p-5 bg-light">
        <h2 className="text-center text-primary">Register</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <label for="inputEmail4" class="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div className="col-md-6">
            <label for="inputEmail4" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
        </div>
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
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Phone
            </label>
            <input
              type="email"
              placeholder="Phone"
              class="form-control"
              id="inputEmail4"
            />
          </div>
        </div>
        <div className="row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Position
            </label>
            <input
              type="email"
              placeholder="Position"
              class="form-control"
              id="inputEmail4"
            />
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Municipality
            </label>
            <select class="form-select" aria-label="Default select example">
              <option value="1"></option>
              <option value="2"></option>
              <option value="3"></option>
            </select>
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
=======
const MuniRegister = ({ color }) => {
    document.body.style.backgroundColor = "#0e66a3"; 
    return (
        <div className="contenedor p-5">
            <div className="title">Register</div>
            <div className="row g-3">
                <div className="col">
                    <label for="inputEmail4" class="form-label">
                        First Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        aria-label="First name"
                    />
                </div>
                <div className="col">
                    <label for="inputEmail4" class="form-label">
                        Last Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        aria-label="Last name"
                    />
                </div>
            </div>
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
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">
                        Phone
                    </label>
                    <input
                        type="email"
                        placeholder="Phone"
                        class="form-control"
                        id="inputEmail4"
                    />
                </div>
            </div>
            <div className="row g-3">
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">
                        Position
                    </label>
                    <input
                        type="email"
                        placeholder="Position"
                        class="form-control"
                        id="inputEmail4"
                    />
                </div>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">
                        Municipality
                    </label>
                    <input
                        type="email"
                        placeholder="Municipality"
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
    );
>>>>>>> 432a93417ec080a3482b6a88397732903336b275
};

export default MuniRegister;
