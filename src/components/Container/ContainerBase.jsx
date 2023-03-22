import React from 'react'
import DealCont from './DealCont';



function ContainerBase() {

  const data = [
    {
      id:1,
      img:"../Images/DealOftheDAy/image-01.webp",
      logo1:"../Images/logo/US polo logo.png",
      logo2:"../Images/logo/US polo logo.png",
      offer1:"Min 70%",
      offer2:"+ Extra 30%",
  },
   {
    id:2,
    img:"../Images/DealOftheDAy/image-01.webp",
    logo1:"../Images/logo/US polo logo.png",
    logo2:"../Images/logo/US polo logo.png",
    offer1:"Min 70%",
    offer2:"+ Extra 30%",
}, 
{
  id:3,
  img:"../Images/DealOftheDAy/image-01.webp",
  logo1:"../Images/logo/US polo logo.png",
  logo2:"../Images/logo/US polo logo.png",
  offer1:"Min 70%",
  offer2:"+ Extra 30%",
}, 
{
  id:4,
  img:"../Images/DealOftheDAy/image-01.webp",
  logo1:"../Images/logo/US polo logo.png",
  logo2:"../Images/logo/US polo logo.png",
  offer1:"Min 70%",
  offer2:"+ Extra 30%",
}, {
  id:5,
  img:"../Images/DealOftheDAy/image-01.webp",
  logo1:"../Images/logo/US polo logo.png",
  logo2:"../Images/logo/US polo logo.png",
  offer1:"Min 70%",
  offer2:"+ Extra 30%",
}, {
  id:6,
  img:"../Images/DealOftheDAy/image-01.webp",
  logo1:"../Images/logo/US polo logo.png",
  logo2:"../Images/logo/US polo logo.png",
  offer1:"Min 70%",
  offer2:"+ Extra 30%",
},{id:7,
  img:"../Images/DealOftheDAy/image-01.webp",
  logo1:"../Images/logo/US polo logo.png",
  logo2:"../Images/logo/US polo logo.png",
  offer1:"Min 70%",
  offer2:"+ Extra 30%",
  },
] 

const prod = data.map((item) => {
  return(
  <DealCont 
        key={item.id} 
        url={item.img} 
        brand1 = {item.logo1} 
        brand2={item.logo2} 
        off1={item.offer1} 
        off2={item.offer2}
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
          Deal of the Day
        </h3>
        <div className="container-fluid row bg-grey me-auto ms-auto">
         
        {prod}
        </div>
      </div>
    </>
  );
}

export default ContainerBase