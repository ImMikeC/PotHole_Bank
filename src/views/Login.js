import React from 'react';
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <h1>Login</h1>
            <Link to="/people/register"><Button className={"buttonPeopleRegister"} text={"Register People"} /></Link>
            <Link to="/municipality/register"><Button className={"buttonMuniRegister"} text={"Register Muni"} /></Link>
        </>
    )
}

export default Login;