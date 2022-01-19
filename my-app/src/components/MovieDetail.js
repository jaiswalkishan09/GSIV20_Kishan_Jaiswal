import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addDetailMovie, addMovieCredit } from "../action/index";
import DetailNavBar from "./DetailNavBar";

export default function MovieDetail() {
  const movieId = useSelector((state) => state.idReducer);
  const movieData = useSelector((state) => state.movieDetailReducer);
  const creditData = useSelector((state) => state.movieCreditReducer);
  const dispatch = useDispatch();
  useEffect(async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_CONFIG_API_MOVIE_DETAIL}${movieId.id}?api_key=${process.env.REACT_APP_DOMAIN_API_KEY}`,
        {
          method: "GET",
        }
      );
      let json_res = await response.json();
      if (json_res) {
        dispatch(addDetailMovie(json_res));
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_CONFIG_API_MOVIE_DETAIL}${movieId.id}/credits?api_key=${process.env.REACT_APP_DOMAIN_API_KEY}&language=en-US`,
        {
          method: "GET",
        }
      );
      let json_res = await response.json();
      if (json_res) {
        dispatch(addMovieCredit(json_res));
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <DetailNavBar />
      <hr style={{ borderBottom: "3px solid", borderColor: "#9F9F9F" }} />
      <div className="container">
        {movieData.data ? (
          <div className="row">
            <div className="col-4 panel">
              <img
                className="img-fluid"
                src={
                  `${process.env.REACT_APP_IMAGE_DOMAIN}` +
                  movieData.data.poster_path
                }
              ></img>
            </div>
            <div className="col-8 panel">
              <div className="d-flex flex-row">
                <h5 className="p-2">{movieData.data.title}</h5>
                <h5 className="p-2 text-muted">
                  ({movieData.data.vote_average})
                </h5>
              </div>
              <div className="d-flex flex-row">
                <p className="p-2">
                  {movieData.data.release_date}
                  <span className="p-2">|</span>
                </p>
                <p className="p-2">
                  {movieData.data.runtime}
                  <span className="p-2">|</span>
                </p>
                {creditData.data
                  ? creditData.data.crew.map((data, index) =>
                      data.job == "Director" ? (
                        <p className="p-2" key={index}>
                          {data.name}
                        </p>
                      ) : (
                        ""
                      )
                    )
                  : "..."}
              </div>

              <div className="d-flex flex-wrap">
                <p className="p-1" style={{ marginBottom: "0px" }}>
                  Cast:
                </p>
                {creditData.data
                  ? creditData.data.cast.map((data, index) => (
                      <p
                        className="p-1"
                        style={{ marginBottom: "0px" }}
                        key={index}
                      >
                        {index != 0 ? <span>,</span> : ""}
                        {data.name}
                      </p>
                    ))
                  : "..."}
              </div>

              <p style={{ marginTop: "15px" }}>
                Description:{movieData.data.overview}
              </p>
            </div>
          </div>
        ) : (
          "Please Wait or Try Again Network Problem Click on the Home Button"
        )}
      </div>
    </>
  );
}
