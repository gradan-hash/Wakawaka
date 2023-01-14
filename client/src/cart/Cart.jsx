import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./cart.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { buildingRoute } from "../api/api";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function Cart({ setCart, updateCartLength }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);

        const storedCart = localStorage.getItem("cart");
        console.log(storedCart);

        const cartArray = storedCart ? JSON.parse(storedCart) : [];
        // Fetch the details
        const itemPromises = cartArray.map(async (item) => {
          console.log(item._id);
          const { data } = await axios.get(
            `${buildingRoute}/${String(item._id)}`
          );
          return data.property;
        });
        const items = await Promise.all(itemPromises);
        console.log(items);

        setItems(items);
        setLoading(false);

        updateCartLength(items);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  const total = items.reduce((acc, item) => acc + item.price, 0);

  const handleDelete = (_id) => {
    setItems(items.filter((item) => item._id !== _id));

    const updatedCart = items.filter((item) => item._id !== `${_id}`);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    updateCartLength(updatedCart);
  };

  const handleReset = () => {
    setItems([]);

    localStorage.setItem("cart", JSON.stringify([]));
    updateCartLength([]);
  };

  return (
    <div className="cart">
      <Navbar />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Total products: {items.length}</h1>
          <ul>
            {items.map((item) => (
              <li key={item._id} className="cart-item">
                <img src={item.img} alt={item.description} />
                <div className="details">
                  <h2>{item.description}</h2>
                </div>
                <div className="price">Price:Ksh:{item.price}</div>
                <DeleteOutlinedIcon
                  className="delete"
                  onClick={() => handleDelete(item._id)}
                />
              </li>
            ))}
          </ul>
          <div className="total">
            <h2>SUBTOTAL</h2>
            <h2>${total}</h2>
          </div>
          <button className="custom-button">PROCEED TO CHECKOUT</button>

          <button className="custom-button" onClick={handleReset}>
            Reset Cart
          </button>
        </>
      )}
      <Footer />
    </div>
  );
}

export default Cart;
