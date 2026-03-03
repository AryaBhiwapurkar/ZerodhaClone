import React from "react";

function Pricing() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-4 mb-5">
          <h1 className="fs-3">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" className="" style={{ textDecoration: "none" }}>
            See pricing <i class="fa fa-long-arrow-right"></i>
          </a>
        </div>
        <div className="col-2 mb-5"></div>
        <div className="col-6 mb-5">
          <div className="row text-center">
            <div className="col p-4 border">
              <h1 className="mb-3">₹0</h1>
              <p>Free equity delivery and direct mutual funds.</p>
            </div>
            <div className="col p-4 border">
              <h1 className="mb-3">₹20</h1>
              <p>Intraday & F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
