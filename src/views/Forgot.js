import React from "react";
import { Link } from "react-router-dom";

const Forgot = () => {
  document.body.style.backgroundColor = "#1E4A5F";
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="col-md-4 mb-5 p-5 shadow-sm bg-light border rounded-3">
        <h1 className="text-center mb-4 text-primary">Forgot Password</h1>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Forgot;
