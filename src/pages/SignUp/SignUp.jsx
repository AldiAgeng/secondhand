import React, { Component } from 'react'
import { NavbarPlain } from "../../components";
import { BtnSubmit } from "../../components/Buttons/ButtonElements";


export default class SignUp extends Component {
  render() {
    return (
        <div className="App">
            <NavbarPlain title="Sign Up" />
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h3>Sign Up</h3>
                        <div className="mb-3">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                            />
                        </div>
                        <div className="d-grid">
                            <BtnSubmit className="w-100">
                                Sign Up
                            </BtnSubmit>
                        </div>
                        <p className="forgot-password text-right mt-3">
                        Already registered? <a href="/login">sign in</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
  }
}