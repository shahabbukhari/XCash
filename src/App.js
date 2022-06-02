import React from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Planets from "./Components/Planets";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <div className="background">
        <Navbar />
        <Header />
        <About />
      </div>
      <Planets />
      <Footer />
    </div>
  );
}

export default App;
