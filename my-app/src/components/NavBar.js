import React from "react";
import home from "../images/home.svg";
export default function NavBar() {
  return (
    <div>
      <div className="container-fluid" style={{ margin: "6px" }}>
        <div className="row">
          <div className="col-6 ">
            <div
              className="input-group"
              style={{ backgroundColor: "#DFDFDF", borderRadius: "10px" }}
            >
              <div className="input-group-append">
                <button
                  className="btn  py-2"
                  type="button"
                  style={{ boxShadow: "none" }}
                >
                  <i className="bi bi-search" style={{ color: "#9B9B9B" }}></i>
                </button>
              </div>
              <input
                className="form-control py-2"
                type="search"
                placeholder="Search"
                style={{
                  border: "none",
                  backgroundColor: "#DFDFDF",
                  borderRadius: "7px",
                  boxShadow: "none",
                }}
              />
            </div>
          </div>
          <div className="col-6" style={{ textAlign: "right" }}>
            <img src={home} style={{ height: "16px", width: "16px" }}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
