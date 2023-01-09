import React, { useState, useEffect } from "react";
import axios from "axios";
import { buildingRoute } from "../api/api";
import "./search.scss";
function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]); 
  useEffect(() => {
     axios.get(buildingRoute).then((res) => {
      setData(Object.values(res.data));

      console.log(Object.values(res.data));
    });
  }, []);

  useEffect(() => {
    const results = data.filter((item) => {
      return (
        (item &&
          item.apartmentName &&
          typeof item.apartmentName.toLowerCase === "function" &&
          item.apartmentName
            .toLowerCase()
            .includes(searchQuery.toLowerCase())) ||
        (item &&
          item.location &&
          typeof item.location.toLowerCase === "function" &&
          item.location.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });

    setFilteredData(results);
    
  }, [searchQuery, data]);

  return (
    <div>
    <h1>search items here </h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul>
        {filteredData.map((item) => (
          <li key={item._id}>
            <img src={item.img} alt="" />
            <p>{item.apartmentname}</p>
            <p>{item.price}</p>
            <p>{item.location}</p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
