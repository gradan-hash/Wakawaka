import React from "react";
import "./new.scss";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
import { buildingRoute } from "../../../api/api";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [loading, setLoading] = useState(false);
  const [building, setBuilding] = useState({
    apartmentName: "",
    location: "",
    price: "",
    description: "",
    telNum: "",
    img: "",
  });
  const changeHandler = (e) => {
    if (e.target.name === "file") {
      setFile(e.target.files[0]);
      const uploadImage = async () => {
        setLoadingUpload(true);
        const formData = new FormData();
        formData.append("upload_preset", "muohmkoe");
        formData.append("cloud_name", "dgofftfvk");
        formData.append("file", e.target.files[0]);
        try {
          setLoadingUpload(true);

          const res = await fetch(
            "https://api.cloudinary.com/v1_1/dgofftfvk/upload",
            { body: formData, method: "POST" }
          );

          const data = await res.json();
          console.log(data);

          setBuilding({ ...building, img: data.url });
          setLoadingUpload(false);
        } catch (error) {
          setLoadingUpload(false);
        }
      };

      uploadImage();
    } else {
      setBuilding({ ...building, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(building);
    if (building.img) {
      try {
        if (
          !building.apartmentName ||
          !building.location ||
          !building.price ||
          !building.description ||
          !building.telNum
        ) {
          alert("All fields are required");
          return;
        }
        setLoading(true);

        const { data } = await axios.post(`${buildingRoute}/create`, building);
        console.log(data);
        setLoading(false);
        alert("succesfully uploaded");
        setBuilding({
          apartmentName: "",
          location: "",
          price: "",
          description: "",
          telNum: "",
          img: "",
        });
      } catch (error) {
        setLoading(false);
      }
    } else {
      alert("image is required");
    }
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newcontainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
              name="file"
            />
          </div>
          <div className="right">
            <form>
              <div className="forminput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  multiple
                  accept="image/*"
                  onChange={changeHandler}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="forminput" key={input.id}>
                  <label>{input.label}:</label>
                  <input
                    type={input.type}
                    name={input.name}
                    onChange={changeHandler}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}

              <button
                onClick={handleSubmit}
                disabled={loadingUpload || loading}>
                {loading
                  ? "Loading..."
                  : loadingUpload
                  ? "Uploading..."
                  : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
