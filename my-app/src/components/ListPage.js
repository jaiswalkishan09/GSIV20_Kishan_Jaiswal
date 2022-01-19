import React, { useEffect } from "react";
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
  useEffect(async () => {
    try {
      if (pageNo != 0) {
        const response = await fetch(
          `${process.env.REACT_APP_CONFIG_API_UPCOMING_MOVIE}?api_key=${process.env.REACT_APP_DOMAIN_API_KEY}&page=${pageNo}`,
          {
            method: "GET",
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
