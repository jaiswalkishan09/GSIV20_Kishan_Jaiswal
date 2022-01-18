import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import ListCard from "./ListCard";
import { useSelector, useDispatch } from "react-redux";
import { addList } from "../action/index";
import addReducer from "../reducer/addReducer";
function ListPage(props) {
  const mystate = useSelector((state) => state.addReducer);
  const dispatch = useDispatch();
  const [data, setdata] = useState();
  const [page, setPage] = useState(1);
  useEffect(async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=dd5cf88c89fb73ed6e1fc0a5fa6a1de7&language=en-US&page=2",
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
      }
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <div>
          <NavBar />
          <hr style={{ borderBottom: "3px solid", borderColor: "#9F9F9F" }} />
        </div>
        <ListCard />
      </div>
    </div>
  );
}

export default ListPage;
