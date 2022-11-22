import React, { useState } from "react";
import "../styles/MuniRegister.css";

const MuniRegister = () => {
  const [muni_firstname, setmuni_firstname] = useState("");
  const [muni_lastname, setmuni_lastname] = useState("");
  const [email, setmuni_email] = useState("");
  const [muni_phone, setmuni_phone] = useState("");
  const [password, setmuni_password] = useState("");
  const [muni_position, setmuni_position] = useState("");
  const [municipality, setmunicipality] = useState("");
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
          muni_firstname: muni_firstname,
          muni_lastname: muni_lastname,
          email: email,
          muni_phone: muni_phone,
          password: password,
          muni_position: muni_position,
          municipality: municipality,
          profile_id: 2,
        }),
      };
      const data = await fetch(
        `${process.env.API_URL}api/management/create-municipality`,
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

  document.body.style.backgroundColor = "#0e66a3";

  return (
    <>
      {message && (
        <div className="alerta alert alert-primary text-center" role="alert">
          {message}
        </div>
      )}
      <div className="MuniRegisterBox d-flex justify-content-center align-items-center border-success">
        <div className="col-md-6 p-4 bg-light">
          <h2 className="text-center text-primary">Register</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                aria-label="First name"
                value={muni_firstname}
                onChange={(e) => setmuni_firstname(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
                value={muni_lastname}
                onChange={(e) => setmuni_lastname(e.target.value)}
              />
            </div>
          </div>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label" htmlFor="exampleInputEmail1">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="form-control border border-primary"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setmuni_email(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone</label>
              <input
                type="email"
                placeholder="Phone"
                className="form-control"
                value={muni_phone}
                onChange={(e) => setmuni_phone(e.target.value)}
              />
            </div>
          </div>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Position</label>
              <input
                type="email"
                placeholder="Position"
                className="form-control"
                value={muni_position}
                onChange={(e) => setmuni_position(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Municipality</label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option value={municipality}>La Florida</option>
                <option value={municipality}>Santiago</option>
                <option value={municipality}>Maipu</option>
                onChange={(e) => setmunicipality(e.target.value)}
              </select>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                value={password}
                onChange={(e) => setmuni_password(e.target.value)}
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
              className="p-1 mt-3 btn btn-primary col-2"
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

export default MuniRegister;
