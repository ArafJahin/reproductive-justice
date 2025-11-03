import React from "react";

export default function Bias(){
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Bias & Care: Lived Experience and Clinical Practice</h2>
        <div className="hr"/>
        <div className="grid grid-2">
          <div className="card">
            <h3 style={{fontSize:"1.4rem",fontWeight:700,color:"var(--terra)",margin:"0 0 8px"}}>Stories & Research</h3>
            <p>Placeholder for firsthand accounts and peer reviewed work on how racism, delayed care, and policy limits increase risk.</p>
          </div>
          <div className="card">
            <h3 style={{fontSize:"1.4rem",fontWeight:700,color:"var(--terra)",margin:"0 0 8px"}}>Clinical Context</h3>
            <ul style={{paddingLeft:20,margin:0,lineHeight:1.8}}>
              <li>Emergency care rules vs. state abortion laws.</li>
              <li>Bias and communication problems during pregnancy care.</li>
              <li>Care that respects culture and past trauma.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
