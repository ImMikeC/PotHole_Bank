import React from "react";
import Button from "../components/Button";
import "../styles/MuniRegister.css";

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
                        placeholder="Position"
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
<<<<<<< HEAD
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
=======
    );
>>>>>>> 34a07bdaa7e999abeeeb57a2ef89406e21fff0a5
};

export default MuniRegister;
