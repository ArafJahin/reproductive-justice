import React from "react";
import mother from "../images/mother.jpg";
import protest from "../images/protest.jpg";
import hands from "../images/hands.jpg";

const heroImages = [
  { src: mother,  alt: "Black mother holding newborn in hospital room" },
  { src: protest, alt: "Protesters holding reproductive justice signs" },
  { src: hands,   alt: "Close-up of hands in support circle" },
];

export default function Home(){
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1">Abortion Bans Are a <span style={{color:"var(--rose)"}}>Public Health</span> and <span style={{color:"var(--plum)"}}>Racial Justice</span> Issue</h1>
        <p style={{fontSize:"1.1rem",lineHeight:1.8,color:"#1f2937"}}>
          This project focuses on Black maternal health to show how abortion restrictions make pregnancy more dangerous, worsen inequities in health care, and take away access to safe medical care. It uses and brings together data, real experiences, and policies that support both fair and safe care.
        </p>
        <div style={{marginTop:18,display:"flex",gap:12,flexWrap:"wrap"}}>
          <a className="btn btn-primary" href="#/health">See the data</a>
          <a className="btn btn-ghost" href="#/policy">Policy & solutions</a>
        </div>
        <div className="grid grid-3" style={{marginTop:24}}>
          {heroImages.map((img,i)=> (
            <img key={i} className="hero-img" src={img.src} alt={img.alt}/>
          ))}
        </div>
      </div>
    </section>
  );
}
