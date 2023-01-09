import React, { useEffect } from "react";
import { useState } from "react";
import "../login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faDiagramNext,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { AuthStore } from "../context/Authcontext";
import axios from "axios";
import { loginRoute } from "../api/api";
import { getMessage } from "../utils/util";
import { Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const { user, error, dispatch } = AuthStore();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // const changeHandler =(event)=>{

  function changeHandler(event) {
    setData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const goBack = () => {
    navigate("/");
  };

  // const properties = () => {
  //   navigate("/Properties");
  // };

  async function submitHandler(e) {
    e.preventDefault();

    try {
      dispatch({ type: "LOGIN_REQUEST" });

      const res = axios.post(loginRoute, data);
      // console.log(res)
      dispatch({ type: "LOGIN_SUCCESS", payload: data.details });
      localStorage.setItem("auth", JSON.stringify(res.data));
      navigate("/properties");
    } catch (error) {
      dispatch({ type: "LOGIN_FAIL", payload: getMessage(error) });
    }
  }

  useEffect(() => {
    if (user) {
      navigate("/properties");
    }
    // navigate('/properties')
  }, [user]);
  return (
    <section>
      <div id="sec">
        <div className="main">
          <p className="title-register"> Waka Waka Managers </p>
          <div style={{ background: "black" }}>{error}</div>

          <p className="cont"> Welcome to our Login form</p>
        </div>

        <div className="sec-main">
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            onClick={goBack}
            className="home-arrow"
            title="Go back Home"
          />
          <p>
            {" "}
            Enjoy a View of <strong>
              {" "}
              Beautiful and Pocket Friendly{" "}
            </strong>{" "}
            Houses. Bringing The World To you.{" "}
          </p>

          <form className="registration" onSubmit={submitHandler}>
            <div className="lname">
              <label htmlFor="email">Email Address</label>
              <input
                type="Email"
                placeholder="Enter your Email Address"
                name="email"
                onChange={changeHandler}
                className="input-fname"
                value={data.email}
                required
              />
            </div>

            <div className="lname">
              <label htmlFor="password"> Enter Password </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                name="password"
                onChange={changeHandler}
                className="input-fname"
                value={data.password}
                required
              />
            </div>
            <input type="submit" value="Login" className="submit" />
            <br></br>
            {error && (
              <div style={{ background: "red", alignSelf: "center" }}>
                {error}
              </div>
            )}

            <Link to="/landlordlogin">Login as Landlord</Link>
          </form>

          {/* {!user && <div style={{color: "red"}}>please use correct details</div>} */}
        </div>
      </div>
    </section>
  );
}
