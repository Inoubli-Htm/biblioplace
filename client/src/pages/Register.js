import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { userRegister } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import "./page.css";

function Register() {
  const [data, setData] = useState({ userName: "", email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // handle change
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // user Register
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userRegister(data, navigate));
  };
  return (
    <div>
      <div className="container-fluid ps-md-0">
        <div className="row g-0">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Bienvenue</h3>
                    {/* Sign In Form */}
                    <form onSubmit={handleSubmit}>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          placeholder="votre nom"
                          name="userName"
                          onChange={handleChange}
                        />
                        <label htmlFor="floatingInput">Votre Nom</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                          name="email"
                          onChange={handleChange}
                        />
                        <label htmlFor="floatingInput">Email </label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                          name="password"
                          onChange={handleChange}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                      </div>

                      <div className="d-grid">
                        <button
                          className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                          type="submit"
                        >
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
