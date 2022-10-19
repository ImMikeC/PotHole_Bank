import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  document.body.style.backgroundColor = "#1E4A5F";
  return (
    <>
      <form className="contenedor3 p-5">
        <div className="title">Login</div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
        <Link to="/people/register">
          <Button className={"buttonPeopleRegister"} text={"Register People"} />
        </Link>
        <Link to="/municipality/register">
          <Button className={"buttonMuniRegister"} text={"Register Muni"} />
        </Link>
      </form>
    </>
  );
};

export default Login;
