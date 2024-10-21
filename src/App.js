import React from 'react'
import FIrst from './components/FIrst'
import Card from './components/Card'
const card=[
  {
      heading:"Digital Marketing",
      para:"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor.",
      price: "₹20500"
  },
  {
      heading:"Digital Marketing",
      para:"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor.",
      price: "₹30500"
  },
  {
      heading:"Digital Marketing",
      para:"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor.",
      price: "₹40500"
  },
  {
      heading:"Digital Marketing",
      para:"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor.",
      price: "₹50500"
  },
  

]
const App = () => {
  return (
    <>
    <FIrst/>
    <div className='bg-[#e2fff1] p-10 h-full font-poppines lg:h-full font-Poppins'>
    <h1 className=' text-2xl font-semibold p-10'>Courses Offered</h1>
    <div className='   flex items-center'>
    
    <div className=' grid grid-cols-1 lg:grid-cols-4 gap-4 md:grid-cols-2'>
      {
        card.map((item, index) => (
          <Card key={index}
                heading={item.heading}
                para={item.para} 
                price={item.price}/>
        ))
      }
    </div>
  </div>
  </div>
    </>
  )
}

export default App
