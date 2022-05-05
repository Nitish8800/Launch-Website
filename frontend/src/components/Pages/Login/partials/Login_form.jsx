import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  setInputLoginPassword,
  setInputValue,
  set_Token,
} from "../../../../redux/Action";
import "../../styles.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Loginformcontainer = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 35px rgb(0 0 0 / 10%);
`;
export const Login_Form = () => {
  const { inputEmail, inputPassword } = useSelector((state) => state.login);
  const [token, setToken] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputEmail === "" || inputPassword === "") {
      toast.error("Please fill all the fields");
    } else {
      try {
        const response = await fetch("http://localhost:4000/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: inputEmail,
            password: inputPassword,
          }),
        });
        const data = await response.json();

        console.log(data);

        if (data.message == "User not found") {
          toast.error(data.message);
        } else {
          toast.success("login Successfully");
          dispatch(setInputValue(""));
          dispatch(setInputLoginPassword(""));

          setToken(data.token);
          dispatch(set_Token(data.token));
          localStorage.setItem("token", data.token);
          setTimeout(() => {
            window.location.href = "/";
          }, 2000);
          // console.log(data.token);
        }
      } catch (err) {
        toast.error(err.message);
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <Loginformcontainer>
        <div className="left_side_form">
          <div className="heading__title">
            <h1>Login Your Account</h1>
          </div>

          <form className="form__container" onSubmit={handleSubmit}>
            <div className="input__box">
              <input
                type="email"
                placeholder="Email Adress"
                value={inputEmail}
                onChange={(e) => dispatch(setInputValue(e.target.value))}
                required
              />
            </div>
            <div className="input__box">
              <input
                type="password"
                placeholder="Password"
                value={inputPassword}
                onChange={(e) =>
                  dispatch(setInputLoginPassword(e.target.value))
                }
                required
              />
            </div>

            <div className="form__footer">
              <div className="checkbox">
                <input type="checkbox" />
                <label style={{ marginLeft: "5px" }}>Remember me</label>
              </div>
              <div className="forget_passoword">
                <a href="/">forget Password</a>
              </div>
            </div>
            <div className="input_submit">
              <button type="submit">Login</button>
            </div>
            <div className="reginter_another_page">
              Don't have an account ?{" "}
              <a href="/register" style={{ marginLeft: "5px", color: "blue" }}>
                Register here
              </a>
            </div>
          </form>
        </div>

        <div className="right__side__form">
          <div className="logo_form">
            <img
              src="https://storage.googleapis.com/theme-vessel-items/checking-sites/oddo-2-html/HTML/main/assets/img/logos/logo.png"
              alt=""
            />
          </div>

          <div className="change_page_div">
            <div className="buttons__containers">
              <button style={{ background: "white", color: "#15d0ad" }}>
                <a href="/login">Login</a>
              </button>
              <button style={{ backgroundColor: "gray", color: "white" }}>
                <a href="/register"> Register</a>
              </button>
            </div>
          </div>
        </div>
      </Loginformcontainer>
    </>
  );
};
