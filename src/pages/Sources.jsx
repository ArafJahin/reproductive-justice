import React from "react";

export default function Sources() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Sources & Further Reading</h2>
        <div className="hr" />

        <div className="card" style={{ padding: 0, overflow: "hidden" }}>
          <table className="table">
            <thead>
              <tr>
                <th>Citation</th>
              </tr>
            </thead>

            <tbody>
              {/* Existing cleaned-up sources */}
              <tr>
                <td>
                  <a
                    href="https://tcf.org/content/report/why-access-to-abortion-care-matters-for-black-maternal-health/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    The Century Foundation: Why Access to Abortion Care Matters for Black Maternal Health
                  </a>
                </td>
              </tr>

              <tr>
                <td>
                  <a
                    href="https://www.cdc.gov/nchs/data/hestat/maternal-mortality/2023/maternal-mortality-rates-2023.htm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CDC: Maternal Mortality Rates in the U.S.
                  </a>
                </td>
              </tr>

              <tr>
                <td>
                  <a
                    href="https://www.kff.org/womens-health-policy/what-are-the-implications-of-the-dobbs-ruling-for-racial-disparities/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    KFF: Implications of Dobbs for Racial Disparities
                  </a>
                </td>
              </tr>

              <tr>
                <td>
                  <a
                    href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2822873"
                    target="_blank"
                    rel="noreferrer"
                  >
                    JAMA Network Open: Trends in Maternal Death Post-Dobbs
                  </a>
                </td>
              </tr>

              {/* New sources you asked to add */}
              <tr>
                <td>
                  <a
                    href="https://data.cdc.gov/National-Center-for-Health-Statistics/VSRR-Provisional-Maternal-Death-Counts-and-Rates/e2d5-ggg7/about_data"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CDC: Provisional Maternal Death Counts and Rates
                  </a>
                </td>
              </tr>

              <tr>
                <td>
                  <a
                    href="https://www.kff.org/racial-equity-and-health-policy/racial-disparities-in-maternal-and-infant-health-current-status-and-efforts-to-address-them/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    KFF: Racial Disparities in Maternal & Infant Health
                  </a>
                </td>
              </tr>

              <tr>
                <td>
                  <a
                    href="https://www.commonwealthfund.org/publications/issue-briefs/2024/jun/insights-us-maternal-mortality-crisis-international-comparison"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Commonwealth Fund: Insights on U.S. Maternal Mortality Crisis
                  </a>
                </td>
              </tr>

              <tr>
                <td>
                  <a
                    href="https://www.vogue.com/article/serena-williams-vogue-cover-interview-february-2018"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Vogue: Serena Williams Maternal Health Story
                  </a>
                </td>
              </tr>

              <tr>
                <td>
                  <a
                    href="https://www.cdc.gov/nchs/maternal-mortality/index.htm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CDC: Maternal Mortality Overview
                  </a>
                </td>
              </tr>

              <tr>
                <td>
                  <a
                    href="https://www.cms.gov/priorities/innovation/innovation-models/tmah"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CMS: Transforming Maternal Health Model
                  </a>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
