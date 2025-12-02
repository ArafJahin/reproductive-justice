import React from "react";
import SerenaImg from "../images/image.png";


export default function Bias() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Bias & Care Lived Experience and Clinical Practice</h2>
        <div className="hr" />
        <div className="grid grid-2">
          
          {/* Stories & Research */}
          <div className="card">
            <h3
              style={{
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "var(--terra)",
                margin: "0 0 8px"
              }}
            >
              Stories & Research
            </h3>

            <p style={{ marginBottom: 8 }}>
              Research and personal stories show that racism in pregnancy care is real. 
              Black women and other women of color often say that their pain is not 
              taken seriously and that their concerns are ignored.
            </p>

            <p style={{ marginBottom: 8 }}>
              Studies also find that discrimination and poor treatment were important 
              factors in many pregnancy related deaths. These are harms that could often 
              be prevented with better care and respect.
            </p>

            {/* Real personal story based on public reporting */}
            <p style={{ marginBottom: 0 }}>
              A well known example is Serena Williams who said that after giving birth 
              she could tell something was wrong and asked for medical checks. Her pain 
              and worries were not believed at first and care was delayed. She later 
              learned she had blood clots that could have put her life at risk. Her story shows how even 
              people with access to good hospitals can face bias that puts them at risk.
            </p>

            <img
              src={SerenaImg}
              alt="Serena Williams maternal health story"
              style={{
                marginTop: 16,
                width: "100%",
                borderRadius: 14,
                objectFit: "cover"
              }}
            />
          </div>


          {/* Clinical Context */}
          <div className="card">
            <h3
              style={{
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "var(--terra)",
                margin: "0 0 8px"
              }}
            >
              Clinical Context
            </h3>

            <ul
              style={{
                paddingLeft: 20,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "35px",
                lineHeight: 1.7
              }}
            >
              <li>
                Racism and bias can cause health teams to miss warning signs or delay 
                needed treatment during pregnancy and after birth.
              </li>
              <li>
                Abortion bans and strict rules can slow down emergency care when doctors 
                worry about legal consequences even when a patient is very sick.
              </li>
              <li>
                Training that helps providers listen to patients and respond quickly can 
                lower risk and build trust.
              </li>
              <li>
                Better staffing in hospitals can improve communication and reduce mistakes 
                that often affect Black patients the most.
              </li>
              <li>
                Clear steps for managing pain and bleeding can help stop preventable 
                complications before they become severe.
              </li>
            </ul>


          </div>

        </div>
      </div>
    </section>
  );
}
