import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div style={{maxWidth:1100, margin:"0 auto", width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <div><strong>THAPELO LEKHUANE</strong></div>
        <div>
          <a href="#about" style={{marginRight:12}}>About</a>
          <a href="#experience" style={{marginRight:12}}>Experience</a>
          <a href="#service" style={{marginRight:12}}>Services</a>
          <a href="#work" style={{marginRight:12}}>Work</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}