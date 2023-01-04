import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import forklift from "../../../src/images/forklift.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const [navbar, setNavbar] = useState(true);

  const handleSignOut = () => {
    signOut(auth);
  };

  window.onscroll = function () {
    const position = window.pageYOffset;
    if (position < 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return (
    <Navbar
      style={{ position: "fixed", top: 0, width: "100%", zIndex: 50 }}
      className={`${navbar ? "" : "bg-white"} nav-font`}
      expand="lg"
    >
      <Container>
        <Navbar.Brand className="my-0 py-0">
          <Link
            className={`${navbar ? "text-white" : "text-color"
              } text-decoration-none fw-bold fs-1`}
            to="/"
          >
            {" "}
            <img style={{ height: "70px" }} src={forklift} alt="" /> DEPOT
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          style={{ backgroundColor: "lightgray" }}
          className="me-3"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto header-bg">
            <Link
              className={`${navbar ? "link-color" : "text-color"
                } text-decoration-none link-font me-3 my-auto`}
              to="/blogs"
            >
              Blogs
            </Link>
            <Link
              className={`${navbar ? "link-color" : "text-color"
                } text-decoration-none text-color link-font me-3 my-auto`}
              to="/aboutUs"
            >
              About Us
            </Link>
            {user ? (
              <>
                <Link
                  className={`${navbar ? "link-color" : "text-color"
                    } text-decoration-none text-color link-font me-3 my-auto`}
                  to="/manageItems"
                >
                  Manage Items
                </Link>
                <Link
                  className={`${navbar ? "link-color" : "text-color"
                    } text-decoration-none text-color link-font me-3 my-auto`}
                  to="/addItem"
                >
                  Add Item
                </Link>
                <Link
                  className={`${navbar ? "link-color" : "text-color"
                    } text-decoration-none text-color link-font me-3 my-auto`}
                  to="/myItems"
                >
                  My Items
                </Link>
                <button onClick={handleSignOut} className="login-btn text-white link-font">
                  Log Out
                </button>
              </>
            ) : (
              <button className="login-btn">
                <Link
                  className="link-font text-white text-decoration-none"
                  to="/login"
                >
                  Login
                </Link>
              </button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
