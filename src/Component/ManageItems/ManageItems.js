import { faArrowRight, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import Modal from "react-bootstrap/Modal";

const ManageItems = () => {
   const [products, setProducts] = useState([]);
   const [data, setData] = useState(false);
   const [show, setShow] = useState(false);
   const [deleteId, setDeleteId] = useState(0);

   const handleClose = () => setShow(false);

   useEffect(() => {
      fetch("https://morning-retreat-07507.herokuapp.com/products")
         .then((res) => res.json())
         .then((data) => {
            setProducts(data);
            setData(true);
         });
   }, []);

   const modalId = (id) => {
      setShow(true);
      setDeleteId(id);
   };

   const deleteItem = () => {
      // setShow(true);
      // if (deleteModal) {
      console.log(deleteId);
      fetch(`https://morning-retreat-07507.herokuapp.com/product/${deleteId}`, {
         method: "DELETE",
      })
         .then((res) => res.json())
         .then((data) => {
            const newProducts = products.filter(
               (product) => product._id !== deleteId
            );
            setProducts(newProducts);
         });
      handleClose();
      // }
   };

   let navigate = useNavigate();
   const goToAddItem = () => {
      navigate("/addItem");
   };

   return (
      <div>
         <img
            className="w-100"
            style={{ height: "33vh" }}
            src="https://i.ibb.co/VNHKC7S/bg.jpg"
            alt=""
         />
         <div className="container my-5">
            {data ? (
               <>
                  <h1 className="text-center fw-bold text-color mt-5 item-header">
                     All Items
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
                  <table className="w-100 mx-auto table">
                     <thead className="fs-4">
                        <tr>
                           <th scope="col">Picture</th>
                           <th scope="col">Item Name</th>
                           <th scope="col">Price</th>
                           <th scope="col"></th>
                        </tr>
                     </thead>
                     <tbody className="fs-5">
                        {products.map((product) => (
                           <tr key={product._id}>
                              <td>
                                 <img
                                    style={{ width: "100px" }}
                                    src={product.picture}
                                    alt=""
                                 />
                              </td>
                              <td>{product.name.toUpperCase()}</td>
                              <td>$ {product.price}</td>
                              <td className="fs-3">
                                 <button
                                    onClick={() => modalId(product._id)}
                                    className="border-0 bg-white text-danger"
                                 >
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                 </button>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
                  <Button
                     onClick={goToAddItem}
                     className="fw-bold ms-auto d-block mt-5"
                     variant="primary"
                  >
                     Add New Item <FontAwesomeIcon icon={faArrowRight} />
                  </Button>
               </>
            ) : (
               <Loading></Loading>
            )}
         </div>
         <>
            {/* <Button variant="primary" onClick={handleShow}>
               Launch demo modal
            </Button> */}

            <Modal show={show} onHide={handleClose}>
               <Modal.Header closeButton>
                  <Modal.Title>Delete Confirmation</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  You are about to delete to an item. It will be deleted from
                  everywhere and all data about the item will be erased.
                  <p>ARE YOU SURE YOU WANT TO DELETE IT?</p>
               </Modal.Body>
               <Modal.Footer>
                  <Button variant="danger" onClick={deleteItem}>
                     Delete
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                     Cancel
                  </Button>
               </Modal.Footer>
            </Modal>
         </>
      </div>
   );
};

export default ManageItems;
