import React from "react";

import { Link } from "react-router-dom";

function Landing() {
  return (
    <main id="main">
      <section className="finding-work">
        <p>
          <strong>
            Connecting You To an affordable <br></br>Lavish home of your choice.
          </strong>
        </p>
        <Link to="/properties">
          <button className="btn-house" >
            <strong>Find a House </strong>
          </button>
        </Link>
      </section>
      <section className="description">
        <p>
          {" "}
          Waka Waka Managers helps you find Pocket Friendly Homes in Your
          Desired Location Countrywide.
        </p>
        <p>
          Waka Waka was established in 2019 and since has grown to be a big firm
          that You can trust to manage your home and find a roof over your head
          Don't Sweat it.
        </p>
        <p> What are you doing? Join and connect to Waka Waka Today.</p>
        <p>
          Finding a house is no easy feat. It usually takes a lot of time and a
          lot of effort to find that perfect house.<br></br> with the lack of
          available homes in some parts of the country, it can be very difficult
          to find that perfect house for a price that is within your budget.
          <br></br>Join us today to help you look for a house at an affordable
          price.
        </p>
      </section>

      <section className="trusted">
        <p>
          {" "}
          Waka Waka is trusted by many people all over Kenya. We have Patnered
          with Kenyas best to help you find a home.{" "}
        </p>
        <p>
          Trusted by: 1. Knight Frank Kenya 2. Villa Care Limited 3. Hass
          Consultants 4. Homes Universal
        </p>

        <p> Quality is our Middle Name</p>
      </section>

      <section className="values">
        <div className="workwith">
          <p className="first-p"> Why Work with Us</p>

          <p className="second-p"> &#10004; Trusted Work Partners</p>
          <p className="second-p"> &#10004; Long Term partners</p>
          <p className="second-p"> &#10004; Guiding You towards your Future</p>
        </div>

        <div className="workwith">
          <p className="first-p"> Motto </p>
          <p className="second-p">
            {" "}
            &#10004; Inspiring Africa Through Our Homes.{" "}
          </p>
        </div>

        <div className="workwith">
          <p className="first-p"> Our Mission </p>
          <p className="second-p">
            {" "}
            &#10004; Provide a lavish Home to our Customers at a Cost-Friendly
            Fee.
          </p>
          <p className="second-p">
            {" "}
            &#10004; Reaching Out to you To give you Maximum Comfort.{" "}
          </p>
          <p className="second-p"> &#10004; Making You smile at Your Home.</p>
        </div>

        <div className="workwith">
          <p className="first-p"> Our vision</p>
          <p className="second-p"> Win, Make Give and Do Good </p>
          <p className="second-p">
            {" "}
            We want to win at what we do. <br></br>We do all we can to help our
            customers, agents and employees build wealth.<br></br> We love to
            work with people who are passionate about working hard and also
            giving back to their communities.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Landing;
