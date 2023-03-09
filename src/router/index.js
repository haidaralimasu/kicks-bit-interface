import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "../components";
import { Home } from "../pages";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
