import React from "react";
import forklift from "../../images/forklift.png";
import "./Footer.css";

const Footer = () => {
   const date = new Date().getFullYear();
   return (
      <div className="footer text-center mt-5">
         <p className="my-0 py-0 text-decoration-none text-white nav-font fw-bold">
            <img style={{ height: "70px" }} src={forklift} alt="" /> DEPOT
         </p>
         <p className="text-white">Warehouse and Storage</p>
         <p className="text-white mb-0">
            Copyrights © {date} Depot. All Right Reserved. Developed By Tanvir
         </p>
      </div>
   );
};

export default Footer;
