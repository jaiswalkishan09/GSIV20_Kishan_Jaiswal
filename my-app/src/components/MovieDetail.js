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
        `https://api.themoviedb.org/3/movie/${movieId.id}?api_key=dd5cf88c89fb73ed6e1fc0a5fa6a1de7`,
        {
          method: "GET",
          params: {
            api_key: "dd5cf88c89fb73ed6e1fc0a5fa6a1de7",
          },
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
        `https://api.themoviedb.org/3/movie/${movieId.id}/credits?api_key=dd5cf88c89fb73ed6e1fc0a5fa6a1de7&language=en-US`,
        {
          method: "GET",
          params: {
            api_key: "dd5cf88c89fb73ed6e1fc0a5fa6a1de7",
          },
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
                  "http://image.tmdb.org/t/p/w300" + movieData.data.poster_path
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
                        <p className="p-2">{data.name}</p>
                      ) : (
                        ""
                      )
                    )
                  : "..."}
              </div>

              <div className="d-flex flex-wrap">
                <p className="p-1">Cast:</p>
                {creditData.data
                  ? creditData.data.cast.map((data, index) => (
                      <p className="p-1">{data.name}</p>
                    ))
                  : "..."}
              </div>

              <p>Description:{movieData.data.overview}</p>
            </div>
          </div>
        ) : (
          "please wait"
        )}
      </div>
    </>
  );
}
