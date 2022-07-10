import React from "react";
import { NavbarPlain } from "../../components";
import { BtnSubmit } from "../../components/Buttons/ButtonElements";
import "../../App.css";

function Login() {
    return (
        <div className="App">
            <NavbarPlain title="Login"/>
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
                            <BtnSubmit className="w-100">Submit</BtnSubmit>
                        </div>
                        <div className="mt-3 text-end">
                            <p>
                                <a className="font-login" href="#">Forgot password?</a>
                            </p>
                            <p>
                                don't have an account?&nbsp;<a className="font-login" href="/sign-up">Register here</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;