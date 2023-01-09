import React, { useEffect } from "react";
import { useState } from "react";
import "./landlordreg.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { registerRoute } from "../../api/api";
import { getMessage } from "../../utils/util";
import { AuthStore } from "../../context/Authcontext";

function LandlordRegister() {
  const navigate = useNavigate();
  const { error, dispatch, user } = AuthStore();
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(null);
  const [data, setData] = useState({
    firstname: "",
    surname: "",
    email: "",
    countrycode: "",
    telnum: "",
    password: "",
  });

  // const keystroke =(event)=>{

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
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      dispatch({ type: "REGISTER_REQUEST" });
      const res = await axios.post(registerRoute, data);
      dispatch({ type: "REGISTER_SUCCESS", payload: data });
      localStorage.setItem("auth", JSON.stringify(res.data));
      navigate("/landlordhome");
    } catch (error) {
      dispatch({ type: "REGISTER_FAIL", payload: getMessage(error) });
    }
  }

  useEffect(() => {
    if (user) {
      navigate("/landlordhome");
    }
  }, []);

  return (
    <>
      <div id="sec">
        <div className="main">
          <p className="title-register"> Waka Waka Managers </p>
          <div style={{ background: "black" }}>{error}</div>
          <p className="cont">
            {" "}
            &#10004; Reliable Registration <br></br> &#10004; We only work with
            trusted, vetted companies.<br></br> &#10004; Our team works globally
            to eliminate fraud or illegal activity, ensuring the registration
            you apply is safe and secure.
          </p>
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
            Becoming Part of <strong> our Global Community </strong> has never
            been Easier
          </p>

          <form className="registration" onSubmit={handleSubmit}>
            <div className="lname">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                placeholder="Enter your First Name"
                name="firstname"
                onChange={changeHandler}
                className="input-fname"
                value={data.firstname}
                required
              />
            </div>

            <div className="lname">
              <label htmlFor="surname">Last Name</label>
              <input
                type="text"
                placeholder="Enter your Last Name"
                name="surname"
                onChange={changeHandler}
                className="input-fname"
                value={data.surname}
                required
              />
            </div>

            <div className="lname">
              <label htmlFor="email">Email Address</label>
              <input
                type="Email"
                placeholder="Enter your Email Address"
                name="email"
                id="email"
                onChange={changeHandler}
                className="input-fname"
                value={data.email}
                required
              />
            </div>

            <div className="lname">
              <label htmlFor="countrycode">Country Code</label>
              <input
                type="text"
                name="countrycode"
                onChange={changeHandler}
                className="input-fname"
                placeholder="Enter a 3-Letter country code eg. ken for Kenya"
                value={data.countrycode}
                required
              />
            </div>

            <div className="lname">
              <label htmlFor="telnum"> Telephone number</label>
              <input
                type="tel"
                placeholder="Telephone number eg. 254-781-678"
                name="telnum"
                onChange={changeHandler}
                className="input-fname"
                value={data.telnum}
                required
              />
            </div>

            <div className="lname">
              <label htmlFor="password"> Enter Password </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                name="password"
                id="password"
                onChange={changeHandler}
                className="input-fname"
                value={data.password}
                required
              />
            </div>

            <div className="cb">
              <input type="checkbox" name="terms" />
              <label htmlFor="terms">
                I agree to Waka Waka's Terms & Conditions
              </label>
            </div>

            <div className="cb2">
              <input type="checkbox" name="privacy-policy" />
              <label htmlFor="terms">
                {" "}
                I understand that Waka Waka will process my information in
                accordance with their Privacy Policy.<br></br> I may withdraw my
                consent through unsubscribe links at any time.{" "}
              </label>
            </div>

            <input type="submit" className="submit" />
            <br></br>

            <Link to="/landlordLogin">Tenants?Sign up as the Tenants</Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default LandlordRegister;
