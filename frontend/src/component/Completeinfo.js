import React, { useContext, useEffect, useState } from "react";
import { GlobalInfo } from "../App";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "../componentcss/Completeinfo.css";
import "react-toastify/dist/ReactToastify.css";

export default function Completeinfo(props) {
  const [curr, setcurr] = useState([]);
  const [reloads, shouldReloads] = useState(false);
  const reloadEffects = () => shouldReloads(!reloads);

  const { val, acc, getupdate } = useContext(GlobalInfo);

  useEffect(() => {
    const { web3, contract } = val;
    const set = async () => {
      await contract?.getRequest(props.arr.id).then((z) => {
        console.log(z);
        setcurr(z);
      });
    };
    val.contract && set();
  }, [reloads]);

  const [clockState, setClockstate] = useState();
  setInterval(() => {
    var x = props.arr.deadline;
    const time = new Date(x * 1000);
    setClockstate(time.toLocaleDateString());
  }, 1000);

  const sendpayment = async () => {
    const { web3, contract } = val;
    await contract
      ?.makePayment(props.arr.id, {
        from: acc,
      })
      .then((x) =>
        toast(x ? "Amount Transfered Successfully" : "Payement Failed")
      );
    reloadEffects();
    getupdate();
  };

  const pay = async () => {
    const { web3, contract } = val;

    var a = document.getElementById("payamount").value;

    console.log(a);
    await contract
      .sendEth(props.arr.id, {
        from: acc,
        value: web3.utils.toWei(a, "ether"),
      })
      .then(() => toast("Payement Done!"));
    reloadEffects();
    getupdate();
  };

  return (
    <>
      <div className="COuter">
        <div className="display">
          <div className="Rightside">
            <h1>Category:-{curr?.category}</h1>
            <h4>Target:-{curr?.target / 1000000000000000000} Eth</h4>
            <h4>Deadline:-{clockState}</h4>
            <h4>FundRaised:-{curr?.raisedAmount / 1000000000000000000} Eth</h4>
            <h5>Receipient:-{curr?.recipient}</h5>
            <h4>Completed:-{curr?.completed ? "true" : "false"}</h4>
            <h4>No of Donors:- {curr?.noOfDonors}</h4>

            {props.arr.approved == 1 &&
            props.arr.deadline >= Math.floor(Date.now() / 1000) ? (
              <>
                <input id="payamount"></input>
                <button id="but1" onClick={() => pay()}>
                  Pay Now
                </button>
                <button id="but2" onClick={() => sendpayment()}>
                  transfer
                </button>
              </>
            ) : (
              <div></div>
            )}
          </div>
        </div>

        <div className="Description">
          <center>
            <h2>Description</h2>
            {props.arr.description}
          </center>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
}
