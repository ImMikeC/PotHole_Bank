import React from 'react';
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <h1>Login</h1>
            <Link to="/municipality/register"><Button /></Link>
            <Link to="/people/register"><Button /></Link>
        </>
    )
}

export default Login;