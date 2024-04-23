import React from "react";
import logo from "./images/logo.png";
import App from "./App.css";
// import Login from "./Routing/Login";
// import {Link, Outlet} from 'react-router-dom';

function Header() {
  return (
    <>
      <div>
        <nav className="py-2 bg-light border-bottom">
          <div className="container d-flex flex-wrap">
            <img src={logo} className="img-logo" alt="logo" />
            <ul className="nav me-auto d-flex align-self-center ms-5">
              <li className="nav-item">
              {/* <Link to="/">Home</Link> */}
                <a
                  href="#"
                  className="nav-link link-dark px-2 active btn btn-primary text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link link-dark px-2 btn btn-primary">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link link-dark px-2">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link link-dark px-2">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link link-dark px-2">
                  Contact Us
                </a>
              </li>
            </ul>
            <outlet />
            <ul className="nav d-flex align-self-center">
              <li className="nav-item">
                <a href="#" className="nav-link link-dark px-2">
                Login
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link link-dark px-2">
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </nav>
       
      </div>

  
    </>
  );
}
export default Header;
