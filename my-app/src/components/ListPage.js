import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
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
      <div>
        <NavBar />
      </div>
      <div>
        {data
          ? data.results.map((data, index) => {
              console.log(data);
            })
          : "Please wait"}
      </div>
    </div>
  );
}

export default ListPage;
