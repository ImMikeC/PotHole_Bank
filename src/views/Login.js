import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  document.body.style.backgroundColor = "#1E4A5F";
  return (
    <>
      <h1>Login</h1>
      <Link to="/people/register">
        <Button className={"buttonPeopleRegister"} text={"Register People"} />
      </Link>
      <Link to="/municipality/register">
        <Button className={"buttonMuniRegister"} text={"Register Muni"} />
      </Link>
    </>
  );
};

export default Login;
