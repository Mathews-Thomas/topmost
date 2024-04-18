import React from 'react'
import T1 from '../../assets/T1.png';
import T2 from '../../assets/T2.png';
import T3 from '../../assets/T3.png';
function Technology() {
  return (
    <>
    <div className='grid md:grid-cols-2 md:grid-rows-3 gap-2 items-center md:px-20  px-7  2xl:w-[1440px] w-auto mx-auto '>
<div>
    <h1 className='font-bold text-[#652D91] my-3 md:text-xl'>THE LATEST TECHNOLOGY</h1>
    <p className='md:text-base text-sm md:text-justify'>Having a warm and soothing office environment is meaningless without delivering impeccable work. That's why we've taken measures to equip our clinic with the latest and most cutting-edge technology. We've integrated 360° Hygiene systems for maintaining rigorous sterilization processes, advanced air purifiers to ensure a clean and allergen-free atmosphere, and automated alginate mixers. Moreover, we provide a clearer understanding of your dental concerns through intra-oral scans, which can be conveniently displayed on a screen for your benefit.</p>
</div>
<div className='flex justify-center my-2'><img src={T1}/></div>
<div className='flex md:justify-start justify-center my-2'><img src={T2}/></div>
<div>
    <h1 className='font-bold text-[#652D91] my-3 uppercase md:text-xl'>Premium Care</h1>
    <p className='md:text-base text-sm md:text-justify'>At TOPMOST, we guarantee the delivery of high-quality dental diagnosis and treatment within an upscale facility equipped with the latest technology, all at an affordable rate. This commitment is the cornerstone of the TOPMOST group, where every member of our staff is dedicated to meeting the needs of our patients. We take pride in offering exceptional service in a welcoming, clean, and comfortable environment, ensuring that even the most delicate patients feel completely at ease.</p>
</div>
<div>
    <h1 className='font-bold text-[#652D91] my-3 md:text-xl'>THE EXPERIENCE</h1>
    <p className='md:text-base text-sm md:text-justify'>You'll immediately discern the distinction at TOPMOST from the moment you walk through our doors. Our staff has undergone extensive training to deliver exceptional customer service, and we've optimized our procedures to ensure a straightforward, fast, and hassle-free experience for you. Our primary emphasis is on accommodating your schedule. From beginning to end, your experience with us will be unlike anything you've encountered before.</p>
</div>
<div className='flex justify-center my-2'><img src={T3}/></div>

    </div>
    </>
  )
}

export default Technology