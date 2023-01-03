import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const ItemDetail = () => {
  let params = useParams();
  const [item, setItem] = useState([]);
  const [quantityNumber, setquantityNumber] = useState(0);

  useEffect(() => {
    fetch(`https://depot-warehouse.onrender.com/product/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setquantityNumber(data.quantity);
      });
  }, []);

  const handleQuantity = () => {
    if (quantityNumber > 0) {
      fetch(
        `https://depot-warehouse.onrender.com/updateQuantity/${params.id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ quantityNumber }),
        }
      )
        .then((res) => res.json())
        .then((json) => {
          const quantity = quantityNumber;
          const newQuantity = parseInt(quantity) - 1;
          setquantityNumber(newQuantity);
        });
    }
  };

  const restockSubmit = (event) => {
    event.preventDefault();
    let restockNumber = quantityNumber + parseInt(event.target.restock.value);
    fetch(
      `https://depot-warehouse.onrender.com/restockQuantity/${params.id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ restockNumber }),
      }
    )
      .then((res) => res.json())
      .then((json) => {
        setquantityNumber(restockNumber);
      });
    event.target.restock.value = "";
  };

  let navigate = useNavigate();
  const goToManageItems = () => {
    navigate("/manageItems");
  };

  return (
    <div>
      <img
        className="w-100"
        style={{ height: "33vh" }}
        src="https://i.ibb.co/VNHKC7S/bg.jpg"
        alt=""
      />
      <Card className="mx-auto border-0">
        <div className="d-md-flex justify-content-center m-5">
          <div className="w-md-50">
            <Card.Img
              className="w-md-75 mx-auto"
              variant="top"
              src={item?.picture}
            />
          </div>
          <div className="w-md-50">
            <Card.Body>
              <Card.Title>{item?.name?.toUpperCase()}</Card.Title>
              <Card.Text>{item?.description}</Card.Text>
              <h6>Id: {item?._id}</h6>
              <h6>Supplier: {item?.supplierName}</h6>
              <h6>Price: ${item?.price}</h6>
              <h6>Quantity: {quantityNumber}</h6>
              <h6
                className={
                  quantityNumber <= 0
                    ? "text-danger fw-bold d-block"
                    : "d-none"
                }
              >
                Sold Out
              </h6>
              <Button onClick={handleQuantity} variant="primary">
                Delivered
              </Button>
              <form className="mt-4" onSubmit={restockSubmit}>
                <input type="number" name="restock" id="" />
                <br />
                <input
                  className="border-0 bg-success text-white fw-bold mt-3"
                  type="submit"
                  value="Restock"
                />
              </form>
            </Card.Body>
          </div>
        </div>
        <Button
          onClick={goToManageItems}
          className="fw-bold ms-auto d-block mt-5 me-5"
          variant="primary"
        >
          Manage Items <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </Card>
    </div>
  );
};

export default ItemDetail;
