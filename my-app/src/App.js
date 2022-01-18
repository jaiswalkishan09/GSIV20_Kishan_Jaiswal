import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPage from "./components/ListPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
