import React from "react";
import LinkLogin from "../components/LinkLogin";
import { Link } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
    document.body.style.backgroundColor = "#1E4A5F";
    return (
        <>
            <div className="loginbox d-flex justify-content-center align-items-center">
                <div className="loginitem col-md-4 p-4 shadow-sm bg-light border rounded-3">
                    <h1 className="text-center text-primary">Login</h1>
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control border border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control border border-primary" id="exampleInputPassword1" />
                        </div>
                        <p className="small">
                            <Link to="/change/password">
                                <a className="text-primary" href="forget-password.html">Forgot password?</a>
                            </Link>
                        </p>
                        <div className="d-flex justify-content-center align-items-center">
                            <input className="p-1 mb-0 btn btn-primary btn-lg col-4" type="submit" value="Login" />
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
