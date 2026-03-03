import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row p-5">
        <div className="col mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore}>
              {" "}
              Learn More
            </a>
          </div>
        </div>
        <div className="col">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
