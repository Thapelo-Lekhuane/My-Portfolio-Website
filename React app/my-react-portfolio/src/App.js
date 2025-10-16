import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Work from "./components/Work";
import Hustles from "./components/Hustles";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Intro />
        <About />
        <Experience />
        <Services />
        <Work />
        <Hustles />
        <Contact />
      </main>
    </div>
  );
}