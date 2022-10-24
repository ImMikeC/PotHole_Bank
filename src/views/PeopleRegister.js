import React, { useContext, useState } from "react";
import Button from "../components/Button";
import "../styles/PeopleRegister.css";
import PeopleDashboard from './PeopleDashboard'
import { Link } from "react-router-dom";

const PeopleRegister = () => {
  document.body.style.backgroundColor = "#61831F";

  //const { store, actions } = useContext(Context)

<<<<<<< HEAD
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cambiar, setCambiar] = useState()
=======
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
>>>>>>> 4678bf9d16272df0ac9744f4c2dbf5b1bedfe3a5

  const handleClick = () => {
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
<<<<<<< HEAD
        "email": email,
        "password": password,
        "profile_id": 3,
      })
    }
    fetch("http://127.0.0.1:5000/api/users", opts)
      .then(resp => {
        if (resp.status === 200) return /*alert("Bienvenido a nuestro Sitio Web")*/resp.json()
        else alert("Hubo un error")
=======
        email: email,
        password: password,
        profile_id: 3,
      }),
    };
    fetch(
      "https://5000-immikec-proyectofinal4g-4tm08m14h6d.ws-us72.gitpod.io/api/users",
      opts
    )
      .then((resp) => {
        if (resp.status === 200)
          return alert("Bienvenido a nuestro Sitio Web"); //resp.json()
        else alert("Hubo un error");
>>>>>>> 4678bf9d16272df0ac9744f4c2dbf5b1bedfe3a5
      })
      .then()
      .catch((error) => {
        console.error("Hay un error, revisa", error);
      });
  };

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
<<<<<<< HEAD
        <Button
          className={"buttonSubmit"}
          text={"Submit"}
          onClick={handleClick} />
=======
        <div className="d-flex justify-content-center align-items-center">
          <input
            className="p-1 mt-3 btn btn-primary col-2"
            type="submit"
            value="Login"
          />
        </div>
>>>>>>> 4678bf9d16272df0ac9744f4c2dbf5b1bedfe3a5
      </div>
    </div>
  );
};

export default PeopleRegister;
