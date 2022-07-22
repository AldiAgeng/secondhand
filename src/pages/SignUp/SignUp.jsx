import { useState, useEffect } from "react";
import { NavbarPlain } from "../../components";
import { BtnSubmit } from "../../components/Buttons/ButtonElements";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { FormFloating } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = () => {
    axios
      .post("https://tokoku-api-2.herokuapp.com/api/v1/auth/register", {
        name: String(name.target.value),
        email: String(email.target.value),
        password: String(password.target.value),
      })
      .then((response) => {
        console.log(response, "res");
        navigate("/login");
        swal({
          title: "Berhasil!",
          text: "Anda berhasil daftar!",
          icon: "success",
          button: "Uhuyy!",
        });
      })
      .catch((error) => {
        console.log(error.response, "error");
        if (Array.isArray(error.response.data.message)) {
          error.response.data.message.forEach((err) => {
            toast(err, {
              type: "error",
            });
          });
        } else {
          toast(error.response.data.message, {
            type: "error",
          });
        }
      });
  };

  useEffect(() => {}, []);

  return (
    <div className="App">
      <NavbarPlain title="Sign Up" />
      <ToastContainer />
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
              <p className="textGray">
                note : kata sandi harus berisi huruf besar, huruf kecil, angka,
                dan karakter.
              </p>
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
  );
}

export default SignUp;
