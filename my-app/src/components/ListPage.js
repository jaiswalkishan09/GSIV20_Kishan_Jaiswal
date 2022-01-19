import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import ListCard from "./ListCard";
import NextPage from "./NextPage";
import { useSelector, useDispatch } from "react-redux";
import { addList } from "../action/index";
import { showNext } from "../action/index";
import SearchNextPage from "./serchNextPage";
function ListPage() {
  const pageNo = useSelector((state) => state.pageReducer);
  const show = useSelector((state) => state.showReducer);
  const dispatch = useDispatch();
  console.log(pageNo);
  useEffect(async () => {
    try {
      if (pageNo != 0) {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=dd5cf88c89fb73ed6e1fc0a5fa6a1de7&language=en-US&page=${pageNo}`,
          {
            method: "GET",
            params: {
              api_key: "dd5cf88c89fb73ed6e1fc0a5fa6a1de7",
            },
          }
        );

        let json_res = await response.json();
        if (json_res) {
          dispatch(addList(json_res));
          dispatch(showNext());
        }
      }
    } catch (err) {
      console.log(err);
    }
  }, [pageNo]);
  return (
    <div>
      <div className="container-fluid">
        <div>
          <NavBar />
          <hr style={{ borderBottom: "3px solid", borderColor: "#9F9F9F" }} />
        </div>
        <ListCard />
        {show ? <NextPage /> : <SearchNextPage />}
      </div>
    </div>
  );
}

export default ListPage;
