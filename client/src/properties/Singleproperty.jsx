import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { buildingRoute } from "../api/api";
import "./Singleproperty.scss";
import axios from "axios";
import { requestsRoute } from "../api/api";
import swal from "sweetalert";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function Singleproperty({ updateCartLength }) {
  const [property, setProperty] = useState({});
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const { id } = params;

  const getSingleBuilding = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${buildingRoute}/${id}`);
      setProperty(data.property);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleBuilding();
  }, []);

  const storedCart = localStorage.getItem("cart");
  const cartArray = storedCart ? JSON.parse(storedCart) : [];
  const [cart, setCart] = useState(cartArray);

  const handleAddToCart = () => {
    setCart([...cart, property]);
    // Save the cart to local storage
    localStorage.setItem("cart", JSON.stringify(cart));
    // Update the cart length in the Navbar component
    updateCartLength(cart);
    console.log(cart);

    window.alert("Item added to cart");
  };

  const handleClick = async () => {
    const message = `I am interested in buying/renting the apartment: *${property.apartmentName}* with price : *${property.price}* which is located at: *${property.location}* the description of the building is: *${property.description}* and would like to know more details.`;

    try {
      window.open(`https://wa.me/796881039?text=${message}`);
      swal(
        "Sent Successfully!",
        "Your message has been sent successfully via WhatsApp.",
        "success"
      );
    } catch (error) {
      console.error(error);
      swal("Oops!", "An error occurred, Please try again later.", "error");
    }
  };

  return (
    <main>
      <Navbar />
      {loading ? (
        <p>loading</p>
      ) : (
        <div className="i-row">
          <div className="col-left">
            <img src={property.img} alt={property.apartmentName} />
          </div>
          <div className="col-right">
            <div className="property-features">
              <ul className="features">
                <li className="feature">
                  <h1>Name</h1>
                  <div className="flex">
                    <h1 className="facility-name">{property.apartmentName}</h1>
                  </div>
                </li>
                <li className="feature">
                  <h1>Description</h1>
                  <div className="flex">
                    <h1 className="facility-name">{property.description}</h1>
                  </div>
                </li>
                <li className="feature">
                  <h1>Location</h1>
                  <div className="multi-flex">
                    <div className="flex">
                      <h1 className="facility-value">{property.location}</h1>
                    </div>
                  </div>
                </li>
                <li className="feature">
                  <h1>Cost</h1>
                  <div className="flex">
                    <h1 className="facility-name">Ksh</h1>
                    <div className="facility-value">{property.price}</div>
                  </div>
                </li>
                <div className="feature contact">
                  <a href={`tel:${property.telNum}`} className="btn">
                    Call Dealer
                  </a>
                  <br></br>
                  <button type="button" className="btn" onClick={handleClick}>
                    SendWhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="btn1">
                    Add To Cart
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </main>
  );
}

export default Singleproperty;
