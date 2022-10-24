import React, { useContext, useState } from "react";
import Button from "../components/Button";
import "../styles/PeopleRegister.css";
import PeopleDashboard from './PeopleDashboard'
import { Link } from "react-router-dom";

const PeopleRegister = () => {
  //document.body.style.backgroundColor = "#61831F";

  //const { store, actions } = useContext(Context)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cambiar, setCambiar] = useState()


  const handleClick = () => {
    console.log("Esto debe verse")
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        "email": email,
        "password": password,
        "profile_id": 3,

      })
    }
    fetch("http://127.0.0.1:5000/users", opts)
      .then(resp => {
        if (resp.status === 200) return resp.json()
        else alert("Hubo un error")
      })
      .then()
      .catch(error => {
        console.error("Hay un error, revisa", error)
      })
  }


  //document.body.style.backgroundColor = "#1E4A5F";

  return (
    <div className="PeopleRegisterBox d-flex justify-content-center align-items-center">
      <div className="col-md-6  mb-5 p-5 bg-light">
        <h1 className="text-center text-primary">Register</h1>
        <div className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              id="inputEmail4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              id="inputPassword4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Repeat Password
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              className="form-control"
              id="inputPassword4"
            />
          </div>
        </div>


        <div className="d-flex justify-content-center align-items-center">
          <input
            className="p-1 mt-3 btn btn-primary col-2"
            type="submit"
            value="Login"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default PeopleRegister;
