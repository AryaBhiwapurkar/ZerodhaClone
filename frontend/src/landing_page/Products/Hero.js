import React from "react";

const Hero = () => {
  return (
    <div className="container text-center border-bottom mb-5">
      <div className="mt-5 p-5">
        <h1 className="fs-2">Technology</h1>
        <h3 className="fs-5 text-muted mt-2">
          Sleek, modern and intuitive trading platforms
        </h3>
        <h4 className="fs-6 text-muted mt-2 mb-5">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings <i class="fa fa-long-arrow-right"></i>
          </a>
        </h4>
      </div>
    </div>
  );
};

export default Hero;
