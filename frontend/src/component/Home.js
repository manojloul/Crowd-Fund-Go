import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalInfo } from "../App";
export default function Home(props) {
  const { val, acc, getupdate, getyourrequest } = useContext(GlobalInfo);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            CrowdGo
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/request">
                  Requests
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/create">
                  create
                </Link>
              </li>

              <li className="nav-item">
                {props.acc === props.man ? (
                  <Link className="nav-link" to="/Pending">
                    Pending
                  </Link>
                ) : (
                  <Link
                    className="nav-link"
                    onClick={() => getyourrequest()}
                    to="/Yourrequest"
                  >
                    Your Requests
                  </Link>
                )}
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Donate">
                  Your Donations
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled">Account: {props.acc} </a>
              </li>
              <li>
                <a className="nav-link disabled"> Balance: {props.bal}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
