import React, { useContext, useEffect, useState } from "react";
import { GlobalInfo } from "../App";
import Background2 from "./Background2";
export default function Yourrequest(props) {
  const { getyourrequest } = useContext(GlobalInfo);
  return (
    <>
      <center>
        <div>
          <h1>Your Created request</h1>
        </div>
        {props.ypend.length === 0 ? (
          <div>
            <h1>No requests created</h1>
          </div>
        ) : (
          <Background2 query={props.ypend}></Background2>
        )}
      </center>
    </>
  );
}
