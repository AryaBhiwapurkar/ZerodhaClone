import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row p-5">
        <div className="col">
          <img src={imageURL} />
        </div>
        <div className="col mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo}>Try Demo <i class="fa fa-long-arrow-right"></i></a>
            <a href={learnMore} style={{marginLeft:"20px"}}> Learn More <i class="fa fa-long-arrow-right"></i></a>
          </div>

          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{marginLeft:"20px"}}>
              <img src="media/images/appStoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
