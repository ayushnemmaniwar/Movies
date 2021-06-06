import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {auth} from './Firebase'
function Navbar() {
  function LogOut()
  {
    auth.signOut();
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Movies">
                  Movies
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="#">
                  Reviews
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/Writereviews">
                  Write Reviews
                </Link>
              </li>
            </ul>
          </div>
          {
            auth.currentUser?(<ul className="navbar-nav">
          <li className="nav-item">
              <button className="btn btn-danger btn-sm" onClick={LogOut}>
                Logout
              </button>
          </li>
          </ul>):(
            <span></span>
          )
          }
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
