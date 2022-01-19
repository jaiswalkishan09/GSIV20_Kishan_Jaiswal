import React from "react";
import home from "../images/home.svg";
import { useNavigate } from "react-router-dom";

export default function DetailNavBar() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/");
  return (
    <div className="container-fluid" style={{ marginTop: "20px" }}>
      <div className="row">
        <div className="col-8">
          <h5>Movie Details</h5>
        </div>
        <div
          className="col-4"
          style={{ textAlign: "right" }}
          onClick={() => handleClick()}
        >
          <img
            src={home}
            style={{ height: "16px", width: "16px", cursor: "pointer" }}
          ></img>
        </div>
      </div>
    </div>
  );
}
