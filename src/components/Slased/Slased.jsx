import React from 'react'

function Slased({url,brand1,off1,off2}) {
  return (
    <div class="col-sm-3 col-4 bg-white" style={{ width: "10rem" }}>
    <div>
      <img
        src={brand1}
        style={{ width: "4rem" }}
        className="mx-auto d-block"
      />
    </div>
    <div class=" bg-white">
      <img
        src={url}
        style={{ width: "100%" }}
      />
    </div>
    <h6 className="text-center">Starting</h6>
    <h5 className="text-center">
     <span className='fs-6'>Rs. </span> <span className="text-decoration-line-through p-1 fs-4 fw-bold">{off1}</span>
      <span className='fs-5'>{off2}</span>
    </h5>
  </div>
  )
}

export default Slased