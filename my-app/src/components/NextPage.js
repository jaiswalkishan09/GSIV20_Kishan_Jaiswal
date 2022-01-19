import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { pageIncrement, pageDecrement } from "../action";

export default function NextPage() {
  const pageNo = useSelector((state) => state.pageReducer);
  const dispatch = useDispatch();
  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };
  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ marginBottom: "100px", marginTop: "50px" }}
      >
        <div>
          {pageNo != 1 ? (
            <button
              onClick={() => {
                dispatch(pageDecrement());
                handleClick();
              }}
              style={{ padding: "15px", borderRadius: "10px" }}
            >
              <i className="bi bi-caret-left"></i>Prev
            </button>
          ) : (
            ""
          )}
        </div>
        <div
          className="text-center"
          style={{
            paddingLeft: "30px",
            paddingRight: "30px",
            paddingTop: "15px",
          }}
        >
          {pageNo}
        </div>
        <div>
          {pageNo != 19 ? (
            <button
              onClick={() => {
                dispatch(pageIncrement());
                handleClick();
              }}
              style={{ padding: "15px", borderRadius: "10px" }}
            >
              Next<i className="bi bi-caret-right"></i>
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
