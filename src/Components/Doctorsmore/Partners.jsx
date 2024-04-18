import React from 'react'
import ada from '../../assets/ADA.png'
export default function Partners() {
  return (
    <>
    <div className='grid md:grid-cols-2 md:grid-rows-1 md:my-20 my-7 items-center 2xl:w-[1440px] 2xl:mx-auto'>
        <div className='text-[#652D91] md:mx-24 mx-7 my-6 md:text-start text-center'>
            <h1 className='md:text-3xl text-2xl my-2'>Collaborating partners</h1>
            <p>Raw materials and equipment</p></div>
        <div className='flex gap-3 flex-wrap justify-center '>
            <img src={ada} className='w-[12rem]'/>
            <img src={ada} className='w-[12rem]'/>
            <img src={ada} className='w-[12rem]'/>
        </div>
    </div>
    </>
  )
}
