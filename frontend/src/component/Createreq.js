import React, { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../componentcss/request.css";
import { GlobalInfo } from "../App";

export default function () {
  const { val, acc, getupdate } = useContext(GlobalInfo);

  const creates = async () => {
    const { web3, contract } = val;
    var a = document.getElementById("category").value;
    var b = document.getElementById("description").value;
    var f = "";
    var g = "";
    var c = document.getElementById("Address").value;
    var d = document.getElementById("Deadline").value;
    var e = document.getElementById("Amount").value;

    const toTimestamp = (strDate) => {
      const dt = Date.parse(strDate);
      return dt / 1000;
    };
    var d = toTimestamp(d);
    await contract
      .createRequests(a, b, f, g, c, d, web3.utils.toWei(e, "ether"), {
        from: acc,
      })
      .then(() => toast("Request Created Successfully!"));

    getupdate();
  };

  return (
    <>
      <div className="outer">
        <div className="topheading">
          <h3>CrowdGo</h3>
        </div>
        <div className="heading">
          <h1>Create Requests</h1>
        </div>

        <div className="Requestform">
          <div className="left">
            <div className="up">
              <label>Category</label>
              <br></br>
              <input id="category" placeholder="Category" />
            </div>
            <div className="down">
              <label>Description</label>
              <br></br>
              <input id="description" />
            </div>
          </div>

          <div className="right">
            <div className="right-up">
              <div className="Address">
                <label>Receipient Address</label>
                <br></br>
                <input id="Address" placeholder="Address" />
              </div>
              <div className="Target">
                <label>Target</label>
                <br></br>
                <input id="Amount" placeholder="Target Amount" />
              </div>
            </div>

            <div className="right-down">
              <div className="Deadline">
                <label>Deadline</label>
                <br></br>
                <input
                  type="date"
                  id="Deadline"
                  placeholder="Deadline in sec"
                />
              </div>
            </div>
            <center>
              <button onClick={creates}>Submit</button>
            </center>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
}
