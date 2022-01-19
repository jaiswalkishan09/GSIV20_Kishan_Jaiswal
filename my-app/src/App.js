import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPage from "./components/ListPage";
import MovieDetail from "./components/MovieDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage />}></Route>
        <Route path="/movieDetail" element={<MovieDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
