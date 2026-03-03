import React from "react";

function Education() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6">
            <img src="media\images\education.svg"/>
        </div>

        <div className="col-6 mt-5 mb-5">
          <h1 className="fs-3 mt-5">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" className="mb-5" style={{ textDecoration: "none" }}>
            Versity <i class="fa fa-long-arrow-right"></i>
          </a>

          <p className="mt-5">
            TradingQ&A, the most active trading and investment community i India
            for all your market related queries.
          </p>
          <a href="" className="" style={{ textDecoration: "none" }}>
            TradingQ&A <i class="fa fa-long-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
