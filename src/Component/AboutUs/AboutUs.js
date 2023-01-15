import React from "react";
import { FaHome } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="text-center">
      <img
        className="w-100"
        style={{ height: "33vh" }}
        src="https://i.ibb.co/VNHKC7S/bg.jpg"
        alt=""
      />
      <div
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          top: "120px",
          left: 0,
          right: 0,
          textAlign: "center",
          color: "white",
        }}
        className="nav-font"
      >
        <h1 style={{ fontWeight: 700 }}><FaHome style={{ height: "40px", width: "40px", marginBottom: "10px" }} /> / About Us</h1>
      </div>
      <h1>DEPOT</h1>
      <h4>A Warehouse & Storage Company</h4>
    </div>
  );
};

export default AboutUs;
