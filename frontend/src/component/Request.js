import React, { useContext } from "react";
import { GlobalInfo } from "../App";
import { Link } from "react-router-dom";
export default function Request(props) {
  const { getreqid, getpendingid } = useContext(GlobalInfo);
  return (
    <>
      <div className="Req">
        {props.cat.completed === true ||
        props.cat.approved == 2 ||
        props.cat.deadline < Math.floor(Date.now() / 1000) ? (
          <div
            className="card"
            style={{ width: "18rem", border: "2px solid red" }}
          >
            <div className="card-body">
              <h5 className="card-title" id="cat">
                Category:- {props.cat.category}
              </h5>
              <h5 className="card-title" id="des">
                Description:-{props.cat.description}{" "}
              </h5>
              <h5 className="card-title" id="aprove">
                Request:-
                {props.cat.approved == 1
                  ? "Accepted"
                  : props.cat.approved == 0
                  ? "Pending"
                  : "Reject"}
              </h5>
              <h5 className="card-title" id="com">
                Status:-{props.cat.completed ? "Completed" : "Not Completed"}{" "}
              </h5>

              {props.cat.approved == 1 || props.cat.approved == 2 ? (
                <Link
                  className="btn-sm btn-primary"
                  onClick={() => getreqid(props?.cat)}
                  to="/info"
                >
                  see More
                </Link>
              ) : (
                <Link
                  className="btn-sm btn-primary"
                  onClick={() => getpendingid(props?.cat)}
                  to="/Status"
                >
                  see status
                </Link>
              )}
            </div>
          </div>
        ) : (
          <div
            className="card"
            style={{ width: "18rem", border: "2px solid black" }}
          >
            <div className="card-body">
              <h5 className="card-title" id="cat">
                Category:- {props.cat.category}
              </h5>
              <h5 className="card-title" id="des">
                Description:-{props.cat.description}{" "}
              </h5>
              <h5 className="card-title" id="aprove">
                Request:-
                {props.cat.approved == 1
                  ? "Accepted"
                  : props.cat.approved == 0
                  ? "Pending"
                  : "Reject"}
              </h5>
              <h5 className="card-title" id="com">
                Status:-{props.cat.completed ? "Completed" : "Not Completed"}{" "}
              </h5>
              {props.cat.approved == 1 || props.cat.approved == 2 ? (
                <Link
                  className="btn-sm btn-primary"
                  onClick={() => getreqid(props?.cat)}
                  to="/info"
                >
                  see More
                </Link>
              ) : (
                <Link
                  className="btn-sm btn-primary"
                  onClick={() => getpendingid(props?.cat)}
                  to="/Status"
                >
                  see status
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
