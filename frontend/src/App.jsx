import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import Menu from "./components/Menu";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Menu />
              <About />
              <Testimonials />
              <Booking />
              <Footer />
            </>
          }
        />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
