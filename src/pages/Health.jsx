import React from "react";

export default function Health(){
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Health Impacts: Maternal Mortality & Morbidity</h2>
        <div className="hr"/>
        <div className="grid grid-2">
          <div className="card">
            <h3 style={{fontSize:"1.4rem",fontWeight:700,color:"var(--teal)",margin:"0 0 8px"}}>Key Points</h3>
            <ul style={{paddingLeft:20,margin:0,lineHeight:1.8}}>
              <li>Black women face the highest maternal mortality in the U.S. (will include more for all these points these are just slight placeholders for now).</li>
              <li>After the Dobbs decision, states that banned abortion have slower care and more problems in pregnancy and childbirth than states where abortion is still legal.</li>
              <li>Restrictions make it harder to treat miscarriages and other emergencies because they use the same medicines and procedures as abortions.</li>
            </ul>
          </div>
          <div className="card">
            <h3 style={{fontSize:"1.4rem",fontWeight:700,color:"var(--teal)",margin:"0 0 8px"}}>Placeholder Charts and Data Tables</h3>
            <div style={{height:220,border:"2px dashed #cbd5e1",borderRadius:14,display:"grid",placeItems:"center",color:"#64748b"}}>figures here.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
