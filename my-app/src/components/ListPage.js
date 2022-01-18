import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import ListCard from "./ListCard";
function ListPage(props) {
  const [data, setdata] = useState();
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
        setdata(json_res);
      }
    } catch {
      console.log("eroor");
    }
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <div>
          <NavBar />
          <hr style={{ borderBottom: "3px solid", borderColor: "#9F9F9F" }} />
        </div>
        <div className="d-flex justify-content-center  flex-wrap">
          {data
            ? data.results.map((data, index) => (
                <div className="p-1">
                  <ListCard />
                </div>
              ))
            : "Please wait"}
        </div>
      </div>
    </div>
  );
}

export default ListPage;
