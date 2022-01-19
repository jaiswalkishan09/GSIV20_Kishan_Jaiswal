import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchPageIncrement, searchPageDecrement } from "../action";

export default function SearchNextPage() {
  const searchPageNo = useSelector((state) => state.searchPageReducer);
  const data = useSelector((state) => state.addReducer);
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
          {searchPageNo != 1 ? (
            <button
              onClick={() => {
                dispatch(searchPageDecrement());
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
          {searchPageNo}
        </div>
        <div>
          {data.data && searchPageNo != data.data.total_pages ? (
            <button
              onClick={() => {
                dispatch(searchPageIncrement());
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
