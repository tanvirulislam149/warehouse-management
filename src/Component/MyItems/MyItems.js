import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "../Loading/Loading";
import { FaHome } from "react-icons/fa";

const MyItems = () => {
  const [user, loading, error] = useAuthState(auth);

  const [products, setProducts] = useState([]);
  const [data, setData] = useState(false);

  useEffect(() => {
    fetch(
      `https://depot-warehouse.onrender.com/myitems?user=${user?.email}`,
      {
        headers: {
          authorization: localStorage.getItem("accessToken"),
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setData(true);
      });
  }, []);

  const deleteItem = (id) => {
    if (window.confirm("Are U Sure?") === true) {
      fetch(`https://depot-warehouse.onrender.com/product/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const newProducts = products.filter(
            (product) => product._id !== id
          );
          setProducts(newProducts);
        });
    }
  };
  const handleSignOut = () => {
    signOut(auth);
  };

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
        <h1 style={{ fontWeight: 700 }}>MY ITEMS</h1>
      </div>
      <div
        style={{
          position: "absolute",
          top: "180px",
          left: "46%",
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
            MY ITEMS
          </p>
        </div>
      </div>
      {data ? (
        <>
          <h1 className="text-center fw-bold text-color mt-5 item-header">
            My Items
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
          <table className="w-50 mx-auto">
            <tbody>
              {products.message
                ? handleSignOut()
                : products.map((product) => (
                  <tr className="border-1" key={product._id}>
                    <th className="text-center">
                      <img
                        style={{ width: "50px" }}
                        src={product.picture}
                        alt=""
                      />
                    </th>
                    <th className="text-center px-1 px-md-3 py-3">
                      {product.name.toUpperCase()}
                    </th>
                    <th className="text-center px-1 px-md-3">
                      Price: ${product.price}
                    </th>
                    <th className="text-center fs-1 px-1 px-md-3">
                      <button
                        onClick={() => deleteItem(product._id)}
                        className="border-0 bg-white text-danger"
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
                    </th>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
};

export default MyItems;
