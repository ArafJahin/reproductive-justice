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
                <th>Background Info.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://tcf.org/content/report/why-access-to-abortion-care-matters-for-black-maternal-health/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    The Century Foundation: Why Access to Abortion Care Matters
                    for Black Maternal Health (2024)
                  </a>
                </td>
                <td>
                  _
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.cdc.gov/nchs/data/hestat/maternal-mortality/2023/maternal-mortality-rates-2023.htm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CDC: Maternal Mortality Rates in the U.S. (2023)
                  </a>
                </td>
                <td>_</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.kff.org/womens-health-policy/what-are-the-implications-of-the-dobbs-ruling-for-racial-disparities/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    KFF: Implications of Dobbs for Racial Disparities (2024)
                  </a>
                </td>
                <td>
                  _
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2822873"
                    target="_blank"
                    rel="noreferrer"
                  >
                    JAMA Network Open: Trends in Maternal Death Post-Dobbs (2024)
                  </a>
                </td>
                <td>
                  _
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
