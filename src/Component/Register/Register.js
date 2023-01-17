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
import { useEffect } from "react";

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

  useEffect(() => {
    if (user) {
      navigate("/")
      const email = user?.email;
      console.log(email);
      fetch(`https://depot-warehouse.onrender.com/getToken`, {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("accessToken", data.token);
        });
    }
  }, [user])

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
        <h1 style={{ fontWeight: 700 }}><FaHome style={{ height: "40px", width: "40px", marginBottom: "10px" }} /> / REGISTER</h1>
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
