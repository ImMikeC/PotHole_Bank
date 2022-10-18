import React from 'react';
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <h1>Login</h1>
            <Link to="/register"><Button /></Link>
            <Link to="/muniregister"><Button /></Link>
        </>
    )
}

export default Login;