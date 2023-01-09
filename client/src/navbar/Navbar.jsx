import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthStore } from "../context/Authcontext";
import "./navbar.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Cart from "../cart/Cart";

function Navbar() {
  const { user } = AuthStore();
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");

    const cartArray = storedCart ? JSON.parse(storedCart) : [];

    setCart(cartArray);

    setCartLength(cartArray.length);
  }, []);

  const [cartLength, setCartLength] = useState(0);

  const updateCartLength = (cart) => {
    setCartLength(cart.length);
  };

  return (
    <div className="navbar">
      <header>
        <div className="title">
          Waka Waka Managers
          <img src="/img/kenya.png" alt="" className="img" />
        </div>
        <br />

        <ul className="list">
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>

          {!user && (
            <>
              <Link to="/register">
                <li>Register</li>
              </Link>
              <Link to="/Login">
                <li>Log In</li>
              </Link>
            </>
          )}
        </ul>
        <div className="icons">
          <Link to="/searchitems">
            <SearchIcon />
          </Link>

          <PersonOutlineOutlinedIcon />
          <FavoriteBorderOutlinedIcon />
          <Link to="/productitems">
            <div className="carticon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{cartLength}</span>
            </div>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
