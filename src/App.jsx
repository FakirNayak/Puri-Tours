import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Home/Home";
import DestinationSection from "./Component/TOUR/Tour";
import Footer from "./Component/FOOTER/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <DestinationSection />
      <Footer />
    </>
  );
}

export default App;
