import React from 'react'

const Hero = () => {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h3>Support Portal</h3>
        <a href="" className='text-white '>Track Ticket</a>
        
      </div>

      <div className="row p-5" >
        <div className='col p-5 mx-5'>
          <h1 className='fs-4'>Search for an answer or browse help topics to create a ticket</h1>
          <input type="text" placeholder='Eg: how do i activate F&O'  />
          <br />
          <div className='mt-2'>
            <a href="" className='mx-1'>Track account opening</a>
            <a href="" className='mx-1'>Track segment activation</a>
            <a href="" className='mx-1'>Intraday margins</a>
            <a href="" className='mx-1'>Kite user manual</a>
          </div>
        </div>
        
        <div className='col-5 p-5'>
          <h1 className='fs-4'>Featured</h1>
          <ol>
            <li className='mb-3'><a href="">Current Takeovers and Delisting - January 2025</a></li>
            <li><a href="">Latest intraday loeverages - MIS & CO</a></li>
          </ol>
          
        </div>
        
      </div>
    </section>
  );
}

export default Hero