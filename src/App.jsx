import React from "react";
import "./styles.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="site">
      <div className="shell">
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}
