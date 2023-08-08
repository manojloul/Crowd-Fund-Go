import React from "react";
import Request from "./Request";

export default function Background2(props) {
  return (
    <div className="container my-3" id="back">
      <center>
        <h2>CrowdGo-A helping hand</h2>

        <div className="row">
          {props.query.map((element) => {
            return (
              <>
                {
                  <div className="col-md-4" key={element.description}>
                    {" "}
                    <Request cat={element} />{" "}
                  </div>
                }
              </>
            );
          })}
        </div>
      </center>
    </div>
  );
}
