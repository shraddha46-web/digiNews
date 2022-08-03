import React from "react";

export default function About() {
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                About
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body">
                <strong>This is react based news application.</strong> Here news shown as per
                 different category like business,entertainment,general,health,science,sports,technology.
                 By default "Top News" are shown.
                 In <code>app.js</code> routing has added, here you can change paramenters 
                 <code> pageSize="5" country="in" category="health" </code> as per requiremnt.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
