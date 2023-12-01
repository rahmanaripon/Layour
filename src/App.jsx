import { BrowserRouter, Link, Route, Routes, useParams } from "react-router-dom";

import "./App.css";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Portfolio from "./Pages/Portfolio";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Products/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
