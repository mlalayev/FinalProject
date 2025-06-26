import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/page1/page";
import Contact from "./pages/page2/page";

function App() {
  return (
    <>

      <a href="/">About</a>
      <a href="/contact">Contact</a>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About></About>} />
          <Route path="/contact" element={<Contact></Contact>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
