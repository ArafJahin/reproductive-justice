import React from "react";
import Rplot from "../images/Rplot.png";
import Rplot01 from "../images/Rplot01.png";
import Rplot02 from "../images/Rplot02.png";

export default function Health() {
  const captionStyle = {
    marginTop: 10,
    fontSize: 14,
    color: "#334155",
    lineHeight: 1.6,
  };

  const imgStyle = {
    width: "100%",
    maxHeight: 380,
    objectFit: "contain",
    borderRadius: 14,
    display: "block",
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Health Impacts: Maternal Mortality & Morbidity</h2>
        <div className="hr" />

        {/* Stack all cards vertically */}
        <div className="grid" style={{ gridTemplateColumns: "minmax(0, 1fr)", gap: 24 }}>
          {/* Key points */}
          <div className="card">
            <h3
              style={{
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "var(--teal)",
                margin: "0 0 8px",
              }}
            >
              Key Points
            </h3>
            <ul style={{ paddingLeft: 20, margin: 0, lineHeight: 1.8 }}>
              <li>
                Black women face the highest levels of maternal mortality in the United States and this pattern has stayed the same for many years.
              </li>
              <li>
                After the Dobbs decision, states that banned abortion often show slower care and more pregnancy complications compared with states where abortion is still legal.
              </li>
              <li>
                Restrictions on abortion can delay treatment for miscarriages and other emergencies because the same medicines and procedures are used for both.
              </li>
              <li>
                Maternal mortality rose sharply from 2019 to 2022 which shows that the risks were getting worse even before new state restrictions were in place.
              </li>
              <li>
                The drop in maternal deaths after 2022 does not mean the problem improved since the decrease mainly followed the end of the COVID rise, not better care or safer conditions.
              </li>
            </ul>
          </div>

          {/* Chart 1 */}
          <div className="card">
            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "var(--teal)",
                margin: "0 0 12px",
              }}
            >
              Maternal Mortality Disparity: Black vs White
            </h3>
            <img
              src={Rplot}
              alt="Line chart showing maternal mortality disparity between Black and White women"
              style={imgStyle}
            />
            <p style={captionStyle}>
              This graph shows how much higher the maternal mortality rate is for
              Black women compared with White women in the United States. The
              line shows a rate ratio, which means: a value of 3.0 means Black
              women are three times more likely to die from pregnancy-related
              causes than White women. A value of 1.0 would mean both groups have
              the same risk. The graph shows that the ratio stays mostly above
              2.5, and sometimes above 3, meaning Black women are consistently at
              much greater risk.
            </p>
          </div>

          {/* Chart 2 */}
          <div className="card">
            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "var(--teal)",
                margin: "0 0 12px",
              }}
            >
              Percent Change in Maternal Mortality After Dobbs
            </h3>
            <img
              src={Rplot01}
              alt="Bar chart showing percent change in maternal mortality rates before and after the Dobbs decision by race and Hispanic origin"
              style={imgStyle}
            />
            <p style={captionStyle}>
              This graph shows how maternal mortality rates changed before and
              after the Dobbs decision. All the percentages are negative, which
              means the death rates were lower in the months after Dobbs than
              before. But this drop probably happened because COVID-related
              pregnancy deaths went down, not because care improved. A larger
              negative number means a larger decrease, but it does not
              necessarily mean outcomes were better. It only means that the rate
              was lower compared with the earlier period.
            </p>
          </div>

          {/* Chart 3 */}
          <div className="card">
            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "var(--teal)",
                margin: "0 0 12px",
              }}
            >
              Age-Standardized Maternal Mortality Rate Over Time
            </h3>
            <img
              src={Rplot02}
              alt="Line chart of age-standardized maternal mortality rate over time"
              style={imgStyle}
            />
            <p style={captionStyle}>
              This graph shows the maternal mortality rate after adjusting for
              age. Age-standardized means the data was adjusted so that years
              with a lot of older mothers do not automatically look worse just
              because older age increases risk. By adjusting for age, the graph
              shows the true trend in risk over time. There is a steep increase
              from 2019 to 2022 and a decrease after 2022. This tells us that the
              rise in maternal mortality was not only because more older people
              gave birth, but also because the underlying risk itself increased
              during those years.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
