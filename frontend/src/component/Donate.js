import React, { useContext, useState } from "react";
import Web3 from "web3";
import { GlobalInfo } from "../App";
/* global BigInt */
export default function Donate() {
  const { val, acc } = useContext(GlobalInfo);
  const [donates, setdonates] = useState("0");
  const donation = async () => {
    const { web3, contract } = val;
    await contract
      ?.contri({
        from: acc,
      })
      .then((p) => {
        setdonates(BigInt(p).toString());
        console.log(donates);
      });
  };
  return (
    <>
      <center>
        <h1>Your Donation</h1>
        <div>
          <h3>Donates: {donates / 1000000000000000000} ether</h3>
        </div>
        <button onClick={donation}>click here</button>
      </center>
    </>
  );
}
