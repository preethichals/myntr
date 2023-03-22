import React from 'react'

function DealCont({url,brand1,brand2,off1,off2}) {
   
  return (
    <div
    className="col bg-grey g-1 mt-3"
    style={{ minWidth:"11rem",maxWidth:"13rem"}}
  >
    <div className="bg-white ">
      <img src={url} style={{width:"100%"}} alt="brand"/>
    </div>
    <div className="bg-transparent" style={{marginTop:"-6em"}}><div className="d-flex justify-content-around bg-white opacity-75" style={{maxHeight:"3rem"}}>
<div className="d-inline-flex"><img src={brand1} style={{maxWidth:"3rem",minWidth:"2rem"}} alt="brand1" /></div>
<div className="d-inline-flex"><img src={brand2} style={{maxWidth:"3rem",minWidth:"2rem"}} alt="brand2" /></div>

</div>
    
    <div className='bg-white opacity-75 '><p className='text-center fs-6 text-uppercase' style={{ letterSpacing: "0.2rem" }}><span className='bg-transperent fw-bold '>{off1}</span><br/>
    <span className='bg-grey text-black fs-6 px-2'>{off2}</span> </p>

</div></div>
    
  </div>
  )
}

export default DealCont