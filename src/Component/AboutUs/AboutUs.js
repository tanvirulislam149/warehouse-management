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
               top: "120px",
               left: "45%",
               color: "white",
            }}
            className="nav-font"
         >
            <h1 style={{ fontWeight: 700 }}>ABOUT US</h1>
         </div>
         <div
            style={{
               position: "absolute",
               top: "180px",
               left: "45%",
               color: "white",
            }}
         >
            <div className="d-flex">
               <FaHome style={{ height: "20px", width: "20px" }} />
               <p
                  style={{
                     fontSize: "20px",
                     lineHeight: 0.9,
                     marginLeft: "20px",
                  }}
               >
                  /
               </p>
               <p
                  style={{
                     fontSize: "20px",
                     lineHeight: 1,
                     marginLeft: "20px",
                  }}
                  className="nav-font"
               >
                  ABOUT US
               </p>
            </div>
         </div>
         <h1>DEPOT</h1>
         <h4>A Warehouse & Storage Company</h4>
      </div>
   );
};

export default AboutUs;
