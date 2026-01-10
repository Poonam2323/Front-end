import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Website/Pages/Home";
import About from "./Website/Pages/About";
import Room from "./Website/Pages/Room";
import Not from "./Website/Pages/Not";
import Restaurant from "./Website/Pages/Restaurant";
import Offer from "./Website/Pages/Offer";
import Location from "./Website/Pages/Location";
import Contact from "./Website/Pages/Contact";
import Book from "./Website/Pages/Book";
import Amenities from "./Website/Pages/Amenities";
import Dashboard from "./Admin/Apages/Dashboard";


function App() {
  useEffect(() => {
  AOS.init();
}, []);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/room" element={<Room />}></Route>
          <Route path="/rest" element={<Restaurant />}></Route>
          <Route path="/offer" element={<Offer />}></Route>
          <Route path="/location" element={<Location />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/booking" element={<Book />}></Route>
          <Route path="/amenities" element={<Amenities />}></Route>

          {/* admin */}
          <Route path="*" element={<Not />}></Route>
          <Route path="/dash" element={<Dashboard />}></Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;