import React, { useContext, useState } from "react";
import "../styles/PeopleRegister.css";

import { Link } from "react-router-dom";

const PeopleRegister = () => {
  document.body.style.backgroundColor = "#61831F";

  //const { store, actions } = useContext(Context)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(false);

  const handleClick = async () => {
    try {
      console.log("Esto debe verse");
      const opts = {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          profile_id: 3,
        }),
      };
      const data = await fetch(
        `${process.env.API_URL}api/management/create-user`,
        opts
      );
      console.log({ data });
      const result = await data.json();
      console.log({ result });
      if (result) {
        setMessage("¡Registro Exitoso!");
      }
    } catch (error) {
      console.error("Hay un error, revisa", error);
    }
  };

  return (
    <>
      {message && (
        <div className="alerta alert alert-primary text-center" role="alert">
          Your registration was successful!
        </div>
      )}
      <div className="PeopleRegisterBox d-flex justify-content-center align-items-center">
        <div className="col-md-6  mb-5 p-5 bg-light">
          <h1 className="text-center text-primary">Register</h1>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
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
              <label className="form-label">Password</label>
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
              <label className="form-label">Repeat Password</label>
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
              className="p-1 mt-3 btn btn-primary col-3"
              type="submit"
              value="Register"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PeopleRegister;
