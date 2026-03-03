import React from "react";

const Universe = () => {
  return (
    <div className="container mt-5">
      <div className="row p-5 text-center">
        <h1>The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our platforms.</p>
        
        <div className="col p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted">Thermatic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{width:"50%"}} />
          <p className="text-small text-muted"> Algos & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" style={{width:"70%"}}/>
          <p className="text-small text-muted">Options trading platform</p>
        </div> 

        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" style={{width:"70%"}} />
          <p className="text-small text-muted">Asset Management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png"style={{width:"70%"}} />
          <p className="text-small text-muted"> Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{width:"50%"}} />
          <p className="text-small text-muted">Insurance</p>
        </div> 

        <button className='p-2 btn btn-primary fs-6 mb-5 mt-5' style={{width:"20%", margin:"0 auto", }}>Signup now</button>

      </div>
    </div>
  );
};

export default Universe;
