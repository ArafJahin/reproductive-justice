import React from "react";

import maternitycare from "../images/maternitycare.jpg";
import tele from "../images/tele.jpg";
import doula from "../images/doula.png";

export default function Policy() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Policy and Solutions What Works for Equity</h2>
        <div className="hr" />

        <div className="grid grid-3">

          {/* Protect Good Medical Care */}
          <div className="card">
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "var(--plum)",
                margin: "0 0 8px"
              }}
            >
              Protect Good Medical Care
            </h3>

            <p style={{ color: "#334155" }}>
              Good policies help doctors give safe care without confusion or
              delay. One example is the Transforming Maternal Health model.
              This program supports states that want stronger and safer
              maternity care in hospitals and clinics. It focuses on better
              follow up care and clear treatment steps for emergencies.
            </p>

            <p style={{ color: "#334155" }}>
              Another important step is extending postpartum Medicaid coverage
              to one year after birth. This helps people stay connected to care
              during recovery and lowers the risk of preventable illness.
            </p>

            <img
              src={maternitycare}
              alt="Maternity care visual"
              style={{
                width: "100%",
                height: 140,
                objectFit: "cover",
                borderRadius: 14,
                marginTop: 16
              }}
            />
          </div>

          {/* Improve Access */}
          <div className="card">
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "var(--plum)",
                margin: "0 0 8px"
              }}
            >
              Improve Access
            </h3>

            <p style={{ color: "#334155" }}>
              Many families need help getting regular and affordable care.
              Medicaid expansion is one of the best ways to improve
              access because it allows more people to receive prenatal and
              postpartum services without big costs.
            </p>

            <p style={{ color: "#334155" }}>
              Another important step is keeping telehealth available for
              pregnancy related care. This helps people who live far from
              clinics and makes regular checkups easier to attend.
            </p>

            <img
              src={tele}
              alt="Telehealth visual"
              style={{
                width: "100%",
                height: 140,
                objectFit: "cover",
                borderRadius: 14,
                marginTop: 16
              }}
            />
          </div>

          {/* Support Communities */}
          <div className="card">
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "var(--plum)",
                margin: "0 0 8px"
              }}
            >
              Support Communities
            </h3>

            <p style={{ color: "#334155" }}>
              Community based programs help families feel supported throughout
              pregnancy and after birth. One example is Medicaid coverage for
              doula services. Many states now pay for doulas who give emotional
              support and help people speak up during medical visits.
            </p>

            <p style={{ color: "#334155" }}>
              States also put money into midwife programs and birth centers that
              are trusted in local communities. These programs improve safety and
              help people feel respected during care.
            </p>

            <img
              src={doula}
              alt="Doula support visual"
              style={{
                width: "100%",
                height: 140,
                objectFit: "cover",
                borderRadius: 14,
                marginTop: 16
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
