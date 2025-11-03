import React from "react";

export default function Policy(){
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Policy & Solutions: What Works for Equity</h2>
        <div className="hr"/>
        <div className="grid grid-3">
          {[
            {title:"Protect Good Medical Care",text:"Make sure miscarriage and emergency care are safe and clear for doctors to provide."},
            {title:"Improve Access",text:"Help people get care through better insurance, transportation, time off, and telehealth."},
            {title:"Support Communities",text:"Fund doula and pregnancy health programs in Black communities. Also train more diverse health workers."},
          ].map((c,i)=>(
            <div key={i} className="card">
              <h3 style={{fontSize:"1.2rem",fontWeight:700,color:"var(--plum)",margin:"0 0 8px"}}>{c.title}</h3>
              <p style={{color:"#334155"}}>{c.text}</p>
            </div>
          ))}
        </div>
        <p style={{marginTop:12,fontSize:14,color:"#64748b"}}>__.</p>
      </div>
    </section>
  );
}
