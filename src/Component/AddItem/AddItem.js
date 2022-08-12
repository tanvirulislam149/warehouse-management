import React from "react";
import { useForm } from "react-hook-form";
import "./AddItem.css";
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const AddItem = () => {
   const [user, loading, error] = useAuthState(auth);

   const { register, handleSubmit, reset } = useForm();
   const onSubmit = (data) => {
      // data.name = data.name.toLowerCase();
      console.log(data);
      fetch(`https://morning-retreat-07507.herokuapp.com/insertItem`, {
         method: "POST",
         body: JSON.stringify(data),
         headers: {
            "content-type": "application/json",
         },
      })
         .then((res) => res.json())
         .then((data) => {
            reset();
         });
   };

   return (
      <div>
         <img
            className="w-100"
            style={{ height: "33vh" }}
            src="https://i.ibb.co/VNHKC7S/bg.jpg"
            alt=""
         />
         <h1 className="text-center fw-bold text-color mt-5 item-header">
            Add New Item
         </h1>
         <hr
            className="mb-2 mx-auto"
            style={{
               height: "5px",
               color: "#002266",
               width: "100px",
               borderRadius: "5px",
            }}
         />
         <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
            <input
               className="input-field mx-auto my-1 border-0 py-1 px-2"
               style={{ backgroundColor: "#ecf2f9", borderRadius: "10px" }}
               value={user?.email}
               placeholder="Enter Your Email"
               {...register("userName", { required: true })}
            />{" "}
            <br />
            <input
               className="input-field mx-auto my-1 border-0 py-1 px-2"
               style={{ backgroundColor: "#ecf2f9", borderRadius: "10px" }}
               placeholder="Enter Item Name"
               {...register("name", { required: true })}
            />
            <br />
            <input
               className="input-field mx-auto my-1 border-0 py-1 px-2"
               style={{ backgroundColor: "#ecf2f9", borderRadius: "10px" }}
               placeholder="Enter Short Description"
               {...register("shortDescription", { required: true })}
            />
            <br />
            <input
               className="input-field mx-auto my-1 border-0 py-1 px-2"
               style={{ backgroundColor: "#ecf2f9", borderRadius: "10px" }}
               placeholder="Enter Description"
               {...register("description", { required: true })}
            />
            <br />
            <input
               className="input-field mx-auto my-1 border-0 py-1 px-2"
               style={{ backgroundColor: "#ecf2f9", borderRadius: "10px" }}
               placeholder="Enter Supplier Name"
               {...register("supplierName", { required: true })}
            />
            <br />
            <input
               className="input-field mx-auto my-1 border-0 py-1 px-2"
               style={{ backgroundColor: "#ecf2f9", borderRadius: "10px" }}
               placeholder="Enter Image Url"
               {...register("picture", { required: true })}
            />
            <br />
            <input
               className="input-field mx-auto my-1 border-0 py-1 px-2"
               style={{ backgroundColor: "#ecf2f9", borderRadius: "10px" }}
               type="number"
               placeholder="Enter Price"
               {...register("price")}
            />
            <br />
            <input
               className="input-field mx-auto my-1 border-0 py-1 px-2"
               style={{ backgroundColor: "#ecf2f9", borderRadius: "10px" }}
               placeholder="Enter Item Quantity"
               type="number"
               {...register("quantity")}
            />
            <br />
            <input className="update-btn" type="submit" />
         </form>
      </div>
   );
};

export default AddItem;
