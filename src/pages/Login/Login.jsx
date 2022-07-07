import React from "react";
import { Navbar2 } from "../../components";
import "../../App.css";

function Login() {
    return (
        <div className="App">
            <Navbar2 />
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h3>Log In</h3>
                        <div className="mb-3">
                            <label>Email address/Name</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email or Name"
                            />
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                            />
                            <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="m-2 custom-control-input"
                                id="customCheck1"
                            />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">
                            Submit
                            </button>
                        </div>
                        <p className="forgot-password text-right">
                            <a href="#">Forgot password?</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;