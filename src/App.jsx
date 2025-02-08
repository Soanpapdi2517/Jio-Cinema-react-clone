import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Jio-Cinema-react-clone/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
