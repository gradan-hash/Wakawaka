import React from "react";
import Landing from "./routes/Landing";
import Login from "./routes/login.js";
import Register from "./routes/register";
import Layout from "./routes/layout";
import Properties from "./properties/properties";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Singleproperty from "./properties/Singleproperty";
import LandlordRegister from "./landlord/pages/LandlordRegister";
import LandlordLogin from "./landlord/pages/LandlordLogin";
import Home from "./landlord/panel/home/Home";
import New from "./landlord/panel/new/New";
import { buildingInputs, userInputs } from "./formsource";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Cart from "./cart/Cart";
import Search from "./search/Search";

export default function App() {
  const [cartLength, setCartLength] = useState(0);

  const updateCartLength = (newLength) => {
    setCartLength(newLength);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar cartLength={cartLength} />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Landing />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="Properties" element={<Properties />} />
          <Route
            path="properties/:id"
            element={<Singleproperty updateCartLength={updateCartLength} />}
          />

          <Route path="landlordRegister" element={<LandlordRegister />} />

          <Route path="landlordLogin" element={<LandlordLogin />} />

          <Route path="landlordhome" element={<Home />} />
          <Route
            path="/productitems"
            element={<Cart updateCartLength={updateCartLength} />}
          />
          <Route path="/searchitems" element={<Search />} />

          <Route
            path="uploadnew"
            element={<New inputs={buildingInputs} title="Add New Building" />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
