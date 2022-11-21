import React, { useState } from "react";
import LinkLogin from "../components/LinkLogin";
import { Link, useNavigate } from "react-router-dom";
import user from "../helper/user";
import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  document.body.style.backgroundColor = "#1E4A5F";
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState(false);

  const login = async (event) => {
    event.preventDefault();
    const result = await user(email, password);
    if (result.code == 200) {
      navigate("/user/admin");
      setMessage(result.mensaje);
    } else {
      setMessage(result.mensaje);
    }
    console.log(result.mensaje);
  };

  return (
    <>
      {message && (
        <div className="alerta alert alert-primary text-center" role="alert">
          {message}
        </div>
      )}
      <div className="loginbox d-flex justify-content-center align-items-center">
        <div className="loginitem col-md-4 p-4 shadow-sm bg-light border rounded-3">
          <h1 className="text-center text-primary">Login</h1>
          <form onSubmit={(event) => login(event)}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                onChange={(e) => {
                  console.log("holi");
                  setEmail(e.target.value);
                }}
                value={email}
                type="email"
                className="form-control border border-primary"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                onChange={(e) => {
                  console.log("password");
                  setPassword(e.target.value);
                }}
                value={password}
                type="password"
                className="form-control border border-primary"
                id="exampleInputPassword1"
              />
            </div>
            <p className="small">
              <Link to="/change/password">
                <a className="text-primary" href="forget-password.html">
                  Forgot password?
                </a>
              </Link>
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <button className="p-1 mb-0 btn btn-primary col-2">Login</button>
            </div>
          </form>
          <div className="mt-3">
            <p className="mb-0  text-center">
              You do not have an account?{" "}
              <Link to="/people/register">
                <LinkLogin
                  className={"buttonPeopleRegister"}
                  text={"Register People"}
                />
              </Link>
            </p>
          </div>
          <div className="mt-3">
            <p className="mb-0  text-center">
              You do not have an account?{" "}
              <Link to="/municipality/register">
                <LinkLogin
                  className={"buttonMuniRegister"}
                  text={"Register Muni"}
                />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
