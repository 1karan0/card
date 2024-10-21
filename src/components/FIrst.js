import React from 'react'

const FIrst = () => {
  return (
    <div>
      <div className='bg-gradient-to-br from-[#102229] to-[#1f3841] h-full w-full text-white px-10 py-10  '>
        <h1 className=' text-5xl font-bold tracking-wider leading-relaxed font-Poppins'>Become Corporate- <br />
        <span className='text-green-500'>Ready in Just 6 Months!</span></h1>
        <div className=' flex  items-start gap-28 mt-8'>
        <div className='flex gap-5 '>
        <img src="card-1.png" alt="" className='w-40'/>
        <img src="card-2.png" alt="" className='w-40'/>
        <img src="card-3.png" alt="" className='w-40'/>
        <img src="card-4.png" alt="" className='w-40'/>
        </div>
        <div><img src="cert.png" alt="" className='w-60 relative bottom-6'/></div>
        </div>
      </div>
    </div>
  )
}

export default FIrst
