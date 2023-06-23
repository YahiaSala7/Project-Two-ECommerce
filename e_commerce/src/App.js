import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";
import "./App.css";
function APP() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart/:id" element={<Cart />} />
      </Routes>
    </>
  );
}

export default APP;
