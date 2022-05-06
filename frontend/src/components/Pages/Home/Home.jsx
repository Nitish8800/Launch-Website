import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { set_Token, set_user_data } from "../../../redux/Action";
import HideAppBar from "./Navbar/Sticky";
import Features from "./Features";
import Review from "./Review";
import Pricing from "./Pricing";
import HeaderVideo from "./HeaderVideo";
import Team from "./Team";
import Map from "./Map";
import Footer from "./Footer";
import "./Home.css";

export const Home = () => {
  const { tokenStatus, token, userdata } = useSelector((state) => state);

  const [isLogin, setIsLogin] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(set_Token(localStorage.getItem("token")));
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      });
      const data = await response.json();
      console.log(data);
      if (data.id) {
        dispatch(set_user_data(data));
      }
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    if (tokenStatus && token) {
      fetchData();
    }
  }, [token]);
  return (
    <>
      {/* {userdata.isAdmin ? <button>admin</button> : <button>studen</button>} */}
      <ToastContainer />
      {!isLogin ? (
        <>
          <div className="center_button">
            <div>
              <h2>You are not Login</h2>
              <button onClick={() => (window.location.href = "/login")}>
                Go to login
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="container_map">
          <HideAppBar />
          <HeaderVideo />
          <Features />
          <Review />
          <Pricing />
          <Team />
          <Map />
          <Footer />
        </div>
      )}
    </>
  );
};
