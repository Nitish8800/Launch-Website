import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import { set_Token } from "../../../../redux/Action";
import "../../styles.scss";

const Login_form_container = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 35px rgb(0 0 0 / 10%);
`;

export const Register_Form = () => {
  const [select, setSelect] = useState(true);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const handleSelect = (e) => {
    if (e.target.value === "admin") {
      console.log("admin", true);
      setSelect(true);
    } else {
      setSelect(false);
      console.log("admin", false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      toast.error("Please fill all the fields");
    } else {
      try {
        const response = await fetch("http://localhost:4000/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            admin: select,
          }),
        });
        const data = await response.json();

        if (data) {
          toast.success("Registered Successfully");
          setName("");
          setEmail("");
          setPassword("");
          setToken(data.token);
          dispatch(set_Token(data.token));
          localStorage.setItem("token", data.token);
          setTimeout(() => {
            window.location.href = "/";
          }, 2000);
        }
      } catch (err) {
        toast.error(err.message);
      }
    }
  };
  return (
    <>
      <ToastContainer />
      <Login_form_container>
        <div className="left_side_form">
          <div className="heading__title">
            <h1>Register Your Account</h1>
          </div>

          <form className="form__container" onSubmit={handleSubmit}>
            <div className="input__box">
              <input
                type="text"
                placeholder="full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input__box">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input__box">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="input__box">
              <label for="admin">Choose your profession</label>
              <select
                id="isAdmin"
                name="admin"
                onChange={handleSelect}
                required
                style={{
                  marginLeft: "5px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                <option value="admin">Admin</option>
                <option value="student">Student</option>
              </select>
            </div>

            <div className="form__footer">
              <div className="checkbox">
                <input type="checkbox" />
                <label style={{ marginLeft: "5px" }}>Remember me</label>
              </div>
              <div className="forget_passoword"></div>
            </div>
            <div className="input_submit">
              <button type="submit">Register Now</button>
            </div>
            <div className="reginter_another_page">
              Don't have an account ?{" "}
              <a href="/login" style={{ marginLeft: "5px", color: "blue" }}>
                login here
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
              <button style={{ background: "gray", color: "white" }}>
                <a href="/login">Login</a>
              </button>
              <button style={{ backgroundColor: "white", color: "#15d0ad" }}>
                <a href="/register"> Register</a>
              </button>
            </div>
          </div>
        </div>
      </Login_form_container>
    </>
  );
};
