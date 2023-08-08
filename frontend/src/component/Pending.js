import { useContext } from "react";
import { GlobalInfo } from "../App";
import Request from "./Request";
export default function Pending(props) {
  const { val, acc } = useContext(GlobalInfo);

  return (
    <>
      <center>
        <div>
          <h2>CrowdGo-A helping hand</h2>

          <div className="row">
            {props.arr.map((element) => {
              return (
                <>
                  {element.approved == 1 || element.approved == 2 ? (
                    <></>
                  ) : (
                    <div className="col-md-4" key={element.description}>
                      <Request cat={element} />{" "}
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </center>
    </>
  );
}
