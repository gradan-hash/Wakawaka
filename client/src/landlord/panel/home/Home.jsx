import React from "react";
import "./home.scss";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar"

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
