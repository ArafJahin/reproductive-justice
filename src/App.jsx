import React, { useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Health from "./pages/Health.jsx";
import Bias from "./pages/Bias.jsx";
import Policy from "./pages/Policy.jsx";
import Sources from "./pages/Sources.jsx";

export default function App(){
  const [open,setOpen] = useState(false);

  const linkBase =
    "btn";
  const linkStyle = { background:"var(--sand)", color:"#374151" };
  const activeStyle = { background:"var(--plum)", color:"#fff" };

  return (
    <div>
      {/* Top nav */}
      <div className="nav">
        <div className="nav-inner container">
          <button onClick={()=>setOpen(!open)}
            style={{display:"inline-flex",padding:"8px 10px",borderRadius:12,border:"1px solid #d1d5db",background:"#fff"}}
            aria-label="Toggle navigation">≡</button>

          <a href="#/" style={{textDecoration:"none"}}>
            <div style={{display:"flex",alignItems:"center",gap:12}}>
              <div style={{width:36,height:36,borderRadius:16,background:"var(--plum)"}}/>
              <div>
                <div style={{fontWeight:800,color:"var(--plum)"}}>Reproductive Justice</div>
                <div style={{fontSize:12,color:"#475569"}}>Maternal Health • Equity • Care</div>
              </div>
            </div>
          </a>

          <div className="nav-links" style={{display: open?"none":"flex"}}>
            <NavLink to="/" end className={linkBase} style={({isActive})=>isActive?activeStyle:linkStyle}>Home</NavLink>
            <NavLink to="/health" className={linkBase} style={({isActive})=>isActive?activeStyle:linkStyle}>Health Impacts</NavLink>
            <NavLink to="/bias" className={linkBase} style={({isActive})=>isActive?activeStyle:linkStyle}>Bias & Care</NavLink>
            <NavLink to="/policy" className={linkBase} style={({isActive})=>isActive?activeStyle:linkStyle}>Policy & Solutions</NavLink>
            <NavLink to="/sources" className={linkBase} style={({isActive})=>isActive?activeStyle:linkStyle}>Sources</NavLink>
          </div>
        </div>

        {open && (
          <div className="container" style={{padding:"0 20px 12px"}}>
            {[
              {to:"/",label:"Home"},
              {to:"/health",label:"Health Impacts"},
              {to:"/bias",label:"Bias & Care"},
              {to:"/policy",label:"Policy & Solutions"},
              {to:"/sources",label:"Sources"},
            ].map(l=>(
              <NavLink key={l.to} to={l.to} onClick={()=>setOpen(false)}
                style={{display:"block",padding:"10px 0",color:"#111",textDecoration:"none"}}>
                {l.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/health" element={<Health/>} />
        <Route path="/bias" element={<Bias/>} />
        <Route path="/policy" element={<Policy/>} />
        <Route path="/sources" element={<Sources/>} />
      </Routes>

      {/* Footer */}
      <div className="footer">
        <div className="footer-inner container">
          <p style={{color:"#475569"}}>© {new Date().getFullYear()} Reproductive Justice Project</p>
          <a className="btn" href="#/sources" style={{borderColor:"#e5e7eb",borderWidth:1}}>View sources</a>
          <a className="btn" href="https://github.com/" target="_blank" rel="noreferrer" style={{borderColor:"#e5e7eb",borderWidth:1}}>GitHub</a>
        </div>
      </div>
    </div>
  );
}
