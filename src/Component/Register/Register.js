import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import Loading from "../Loading/Loading";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaHome } from "react-icons/fa";

const Register = () => {
   const [
      createUserWithEmailAndPassword,
      CreateUser,
      CreateLoading,
      creatingError,
   ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

   const [sendEmailVerification, sending, verifingError] =
      useSendEmailVerification(auth);
   const [user, loading, error] = useAuthState(auth);

   let navigate = useNavigate();

   if (loading || sending) {
      return (
         <div>
            <Loading></Loading>
         </div>
      );
   }

   const customId = "custom-id-yes";

   if (creatingError || verifingError) {
      toast(creatingError?.message || verifingError?.message, {
         toastId: customId,
      });
   }

   if (user) {
      if (user?.emailVerified) {
         return (
            <div className="text-center mt-5 pt-5">
               <h1 className="">Welcome To DEPOT</h1>
               <button
                  onClick={() => navigate("/")}
                  className="update-btn mt-2"
               >
                  {" "}
                  Go to Home Page
               </button>
            </div>
         );
      } else {
         return (
            <div className="text-center mt-5 pt-5">
               <h1>Your Email is not Verified.</h1>
            </div>
         );
      }
   }

   const handleRegister = async (event) => {
      event.preventDefault();
      let email = event.target.email.value;
      let password = event.target.password.value;
      let confirmPassword = event.target.confirmPassword.value;
      if (password === confirmPassword) {
         await createUserWithEmailAndPassword(email, password);
         await sendEmailVerification();
      } else {
         toast("Password didn't matched");
      }
      const form = document.getElementById("form");
      form.reset();
   };

   const goToLogin = () => {
      navigate("/login");
   };
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
            <h1 style={{ fontWeight: 700 }}>REGISTER</h1>
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
                  REGISTER
               </p>
            </div>
         </div>
         <h1 className="text-center fw-bold text-color mt-5 item-header">
            Please Register
         </h1>
         <hr
            className="mb-5 mx-auto"
            style={{
               height: "5px",
               color: "#002266",
               width: "100px",
               borderRadius: "5px",
            }}
         />
         <form onSubmit={handleRegister} id="form">
            <input
               className="input-field mx-auto my-2 border-0 py-1 px-2"
               style={{ backgroundColor: "#ecf2f9", borderRadius: "10px" }}
               placeholder="Enter Your Email"
               type="email"
               name="email"
            />{" "}
            <br />
            <input
               className="input-field mx-auto my-2 border-0 py-1 px-2"
               style={{ backgroundColor: "#ecf2f9", borderRadius: "10px" }}
               placeholder="Enter Your Password"
               type="password"
               name="password"
            />{" "}
            <br />
            <input
               className="input-field mx-auto my-2 border-0 py-1 px-2"
               style={{ backgroundColor: "#ecf2f9", borderRadius: "10px" }}
               placeholder="Enter Your Password"
               type="password"
               name="confirmPassword"
            />{" "}
            <br />
            <button
               onClick={goToLogin}
               className="bg-white border-0 text-color fw-bold"
            >
               Already Have An Account? Click Here
            </button>{" "}
            <br />
            <button className="update-btn mt-2 input-field">Register</button>
         </form>
         <ToastContainer />
      </div>
   );
};

export default Register;
