import React from "react";
import { FaHome } from "react-icons/fa";

const Blogs = () => {
   return (
      <div>
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
            <h1 style={{ fontWeight: 700 }}>BLOGS</h1>
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
                     marginLeft: "10px",
                  }}
               >
                  /
               </p>
               <p
                  style={{
                     fontSize: "20px",
                     lineHeight: 1,
                     marginLeft: "10px",
                  }}
                  className="nav-font"
               >
                  BLOGS
               </p>
            </div>
         </div>
         <div className="container">
            <h2 className="text-center">Question & Answers</h2>
            <p>(1)Que: Difference between JavaScript and NodeJs</p>
            <p>
               Ans: JavaScript is a Scripting Language but NodeJs is a
               JavaScript runtime environment. By nodejs, JavaScript can be run
               outside the browser. Javascript is used for frontend development
               but nodejs is for server side. Html can be added in Javascript
               but nodejs don't have the capabilities to add html tags.
               Javascript can be run on the browser wherease nodejs have v8 to
               run JavaScript.{" "}
            </p>
            <p>
               (2)Que: When should I use nodejs and when should I use mongoDB?
            </p>
            <p>
               Ans: Nodejs is a JavaScript runtime environment that helps to run
               JavaScript outside the browser. It builds the connection between
               browser and server. MongoDB is a database. When we need to store
               data and do some work like query,update, read, delete data from
               the database we should use mongoDB.
            </p>
            <p>(3)Que: Differnce between SQL and noSQL.</p>
            <p>
               Ans: SQL means Structured Query Language and noSQL mean
               non-structured query language. In SQL, there is a predefined
               structure of data which shuld be followed but in noSQL, there is
               no such structure and so Developer has the flexibility to add
               document. SQL databases are table based but noSQL database can be
               key-value pairs, graph databases or wide-column stores,
               document-based.{" "}
            </p>
         </div>
      </div>
   );
};

export default Blogs;
