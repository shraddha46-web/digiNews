import React from "react";
import { Link } from "react-router-dom";

export default function HeaderWrapper() {
  return (
    <div className="header-wrapper">
      <nav className=" navbar navbar-expand-lg bg-color-header text-light  fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand text-light" href="javascript:void(0)">
              <h3> DigiNews</h3>
            </a>
            <ul className="navbar-nav me-linkuto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light active"
                  aria-current="page"
                  to="/"
                >
                  Top
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/business">
                  Business
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-light" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
            {/* Start of Global Search */}
            <div className="d-inline">
              <Link className="search text-light" to="/search">
                <i className="fa fa-search search"></i>
              </Link>
              <span className="p-3">Search DigiNews</span>
            </div>

            {/* End of Global Search */}
          </div>
        </div>
      </nav>
    </div>
  );
}
