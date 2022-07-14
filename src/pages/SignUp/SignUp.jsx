import { useState, useEffect } from "react";
import { NavbarPlain } from "../../components";
import { BtnSubmit } from "../../components/Buttons/ButtonElements";
import axios from "axios";
import { FormFloating } from "react-bootstrap";


function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = () => {
        axios.post("https://tokoku-api.herokuapp.com/api/v1/auth/register",{
            name: String (name.target.value),
            email: String (email.target.value),
            password: String (password.target.value),
        }).then((response) => {
            console.log(response, "res");
        });
    }

    return (
        <div className="App">
            <NavbarPlain title="Sign Up" />
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <FormFloating>
                        <h3>Sign Up</h3>
                        <div className="mb-3">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your name"
                                onChange={setName}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                onChange={setEmail}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                onChange={setPassword}
                            />
                        </div>
                        <div className="d-grid">
                            <BtnSubmit className="w-100" onClick={register}>
                                Sign Up
                            </BtnSubmit>
                        </div>
                        <p className="forgot-password text-right mt-3">
                        Already registered? <a href="/login">sign in</a>
                        </p>
                    </FormFloating>
                </div>
            </div>
        </div>
    )
}

export default SignUp;