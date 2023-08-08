import React, { useContext, useState } from "react";
import "../componentcss/status.css";
import { GlobalInfo } from "../App";

export default function Status(props) {
  const { val, acc, getupdate, manager } = useContext(GlobalInfo);
  const [clockState, setClockstate] = useState();
  setInterval(() => {
    var x = props.arr.deadline;
    const time = new Date(x * 1000);
    setClockstate(time.toLocaleDateString());
  }, 1000);
  const approve = async (a) => {
    const { web3, contract } = val;
    console.log("he");
    await contract.isApproved(props.arr.id, a, {
      from: acc,
    });
    getupdate();
  };
  return (
    <>
      <center>
        <div className="">
          <h1>Status</h1>
        </div>
        <div className="Outermost">
          <div className="Outermost1">
            <div className="rightstatus">
              {console.log(props?.arr.approved)}
              <h1>id:-{props.arr.id}</h1>
              <h1>Category:-{props.arr.category}</h1>
              <h2>Description:-{props.arr.description}</h2>
              <h3>Target:-{props.arr.target / 1000000000000000000} Eth</h3>
              <h4>Deadline:-{clockState}</h4>
              <h5>
                FundRaised:-{props.arr.raisedAmount / 1000000000000000000}
              </h5>
              <h6>Receipient:-{props.arr.recipient}</h6>
              <h1>
                {props?.arr?.approved === 1
                  ? props?.arr?.approved
                  : props?.arr?.approved}
              </h1>
              <h6>No of Donors:- {props.arr.noOfDonors}</h6>
            </div>
          </div>
          {manager === acc && props?.arr.approved == 0 ? (
            <>
              {" "}
              <button
                onClick={() => {
                  approve(1);
                }}
              >
                Approve
              </button>
              <button
                onClick={() => {
                  approve(2);
                }}
              >
                Reject
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </center>
    </>
  );
}
