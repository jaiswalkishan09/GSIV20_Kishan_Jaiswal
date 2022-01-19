import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { movieId } from "../action/index";
import { useNavigate } from "react-router-dom";

export default function ListCard() {
  const mystate = useSelector((state) => state.addReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => navigate("/movieDetail");
  return (
    <>
      <div className="d-flex justify-content-center  flex-wrap">
        {mystate.data
          ? mystate.data.results.map((data, index) => (
              <div
                key={index}
                className="Card shadow-lg  mb-5 bg-white rounded p-1 "
                style={{ cursor: "pointer" }}
                onClick={() => {
                  dispatch(movieId(data.id));
                  handleClick();
                }}
              >
                <img
                  className="card-img-top"
                  src={
                    `${process.env.REACT_APP_IMAGE_DOMAIN}` + data.poster_path
                  }
                  style={{ height: "220px", width: "220px" }}
                />
                <div className="card-body" style={{ width: "220px" }}>
                  <div className="row">
                    <div
                      className="col-8"
                      style={{ paddingRight: "0px !important" }}
                    >
                      <h5 className="card-title">{data.title}</h5>
                    </div>
                    <div className="col-4" style={{ textAlign: "right" }}>
                      {data.vote_average}
                    </div>
                  </div>
                  <h6
                    className="card-subtitle mb-2 text-muted"
                    style={{
                      height: "3em",
                      lineHeight: "1.5em",
                      overflow: "hidden",
                    }}
                  >
                    {data.overview}
                  </h6>
                  <i className="bi bi-three-dots"></i>
                </div>
              </div>
            ))
          : "please wait"}
      </div>
    </>
  );
}
