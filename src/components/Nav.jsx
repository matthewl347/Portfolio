import React from "react";
import { PROFILE } from "../data";

export default function Nav() {
  return (
    <nav className="nav">
      <span className="nav-path">{PROFILE.navPath}</span>
      <div className="nav-links">
        <a href="#projects">projects</a>
        <a href="#experience">experience</a>
        <a href="#contact">contact</a>
      </div>
    </nav>
  );
}
