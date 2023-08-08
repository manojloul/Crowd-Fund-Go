import React from "react";
import Request from "./Request";
export default function Background(props) {
  return (
    <div className="container my-3" id="back">
      <center>
        <h2>CrowdGo-A helping hand</h2>
        <h1>
          <span></span>
        </h1>

        <div className="row">
          {props.query.map((element) => {
            {
              console.log(element.approved);
            }
            return (
              <>
                {element.approved == 1 &&
                element.completed === false &&
                element.deadline >= Math.floor(Date.now() / 1000) ? (
                  <div className="col-md-4" key={element.description}>
                    {" "}
                    <Request cat={element} />{" "}
                  </div>
                ) : (
                  <></>
                )}
              </>
            );
          })}
        </div>
      </center>
    </div>
  );
}
