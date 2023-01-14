import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./properties.scss";
import axios from "axios";
import { buildingRoute } from "../api/api";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function Properties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProperties = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(buildingRoute);
      setProperties(data.properties);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProperties();
  }, []);
  return (
    <>
      <Navbar />
      <div className="properties-wrapper">
        {loading ? (
          <p>loading</p>
        ) : (
          properties.map((p) => (
            <div className="col" key={p._id}>
              <div className="property">
                <div className="property-img">
                  <img src={p.img} alt="" className="img" />
                </div>
                <div className="property-footer">
                  <h3 className="property-name">
                    <Link to={`/properties/${p._id}`}>{p.apartmentName}</Link>
                  </h3>
                  <p className="location">{p.location}</p>
                  <p className="location">{p.price}</p>
                  <Link to={`/properties/${p._id}`} className="view-btn">
                    View Deal
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
}

export default Properties;
