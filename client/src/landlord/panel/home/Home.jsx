import React from "react";
import "./home.scss";
import Sidebar from "../sidebar/Sidebar";
import Navbar2 from "../navbar/Navbar2";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
     
      <div className="homecontainer">
        <Navbar2 />
      </div>
    </div>
  );
};

export default Home;
