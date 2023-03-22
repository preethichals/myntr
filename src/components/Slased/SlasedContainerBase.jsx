import React from 'react'
import Slased from './Slased'

function SlasedContainerBase() {
 
    const data = [
        {
            id:1,
            img:"../Images/shirt-01.jpg",
            logo:"../Images/logo/roadster-01.png",
            oldoffer:566,
            newoffer:399,
        }, {
            id:2,
            img:"../Images/shirt-01.jpg",
            logo:"../Images/logo/roadster-01.png",
            oldoffer:566,
            newoffer:399,
        }, {
            id:3,
            img:"../Images/shirt-01.jpg",
            logo:"../Images/logo/roadster-01.png",
            oldoffer:566,
            newoffer:399,
        }, {
            id:4,
            img:"../Images/shirt-01.jpg",
            logo:"../Images/logo/roadster-01.png",
            oldoffer:566,
            newoffer:399,
        }, {
            id:5,
            img:"../Images/shirt-01.jpg",
            logo:"../Images/logo/roadster-01.png",
            oldoffer:566,
            newoffer:399,
        }, {
            id:6,
            img:"../Images/shirt-01.jpg",
            logo:"../Images/logo/roadster-01.png",
            oldoffer:566,
            newoffer:399,
        }, {
            id:7,
            img:"../Images/shirt-01.jpg",
            logo:"../Images/logo/roadster-01.png",
            oldoffer:566,
            newoffer:399,
        }, {
            id:8,
            img:"../Images/shirt-01.jpg",
            logo:"../Images/logo/roadster-01.png",
            oldoffer:566,
            newoffer:399,
        },
       
    ] 
    
    const prod = data.map((item) => {
      return(
      <Slased
            key={item.id} 
            url={item.img} 
            brand1 = {item.logo} 
            off1={item.oldoffer} 
            off2={item.newoffer}
        />
        )
    })
    console.log(prod)
      return (
        <>
          <div>
            <h3
              className="container-fluid p-4 text-uppercase"
              style={{ letterSpacing: "0.5rem" }}
            >
              BRANDS AT SLASHED PRICES
            </h3>
            <div className="container-fluid row me-auto ms-auto">
             
            {prod}
            </div>
          </div>
        </>
      );
    }

export default SlasedContainerBase