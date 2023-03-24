import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Footer() {
  



  return (
    <div className='bg-[#222] pb-[32px]  '>
    <div className='bg-[#222] flex  flex-wrap pt-[75px] '>

    <div>
    </div>
    <div className='w-[300px] p-3'>
    <h1 className='font-bold text-white uppercase text-[20px]'>CATEGORIES</h1>


     <div >
     <ul className='text-[#b2b2b2] text-sm mt-3'>
     <Link href={"/Allproducts"}><li className='mt-3 flex flex-col hover:text-[#717fe0] duration-500 '>pants</li></Link>
     <Link href={"/Allproducts"}><li className='mt-3 flex flex-col hover:text-[#717fe0] duration-500 '>hoodie</li></Link>
     <Link href={"/Allproducts"}><li className='mt-3 flex flex-col hover:text-[#717fe0] duration-500 '>T-shirt</li></Link>
     <Link href={"/Allproducts"}><li className='mt-3 flex flex-col hover:text-[#717fe0] duration-500 '>Watches</li></Link>
     </ul>
     </div>
     


 

    
    </div>

    <div className='w-[300px] p-3'>
    <h1 className='font-bold text-white uppercase text-[20px]'>HELP</h1>
    <ul className='text-[#b2b2b2]  text-sm  mt-3 '>
    <Link href={""}><li className='mt-3 hover:text-[#717fe0] duration-500'>Track Order</li></Link>
    <Link href={""}><li className='mt-3 hover:text-[#717fe0] duration-500'>Returns</li></Link>
    <Link href={""}><li className='mt-3 hover:text-[#717fe0] duration-500'>Shipping</li></Link>
    <Link href={""}><li className='mt-3 hover:text-[#717fe0] duration-500'>FAQs</li></Link>
    
    </ul>
    </div>
    <div className='w-[300px] p-3'>
    <h1 className='font-bold text-white uppercase text-[20px]'>GET IN TOUCH</h1>
    
    <p className='text-[#b2b2b2]  text-sm  mt-3 '>Any questions? Let us know in store 
    at 8th floor, 379 Hudson St, New York,
     NY 10018 or call us on (+1) 96 716 6879</p>
     <div>
     
     </div>
    </div>

    <div className='w-[278px] p-3 flex flex-col'>
    <h2  className='font-bold text-white uppercase text-[20px]'>NEWSLETTER</h2>
    <input className=' focus:bg-[#717fe0] focus:text-white focus:font-bold rounded-lg px-2 ' placeholder='x3hf5xo036@aldgivi.com'/>
    <button className='text-white m-auto mt-5 mb-10 flex justify-center  rounded-3xl py-3 px-6 w-fit uppercase hover:bg-white hover:text-[#717fe0] bg-[#717fe0] font-bold duration-500'>Subscrib</button>
    </div>
    



    
    
    </div>
    <div className='flex flex-col items-center'>    
    <div className='flex flex-row justify-center items-center'>
    <img src='https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-01.png.webp' sizes='20px'/>
    <img src='https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-02.png.webp' sizes='20px'/>
    <img src='https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-03.png.webp' sizes='20px'/>
    <img src='https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-04.png.webp' sizes='20px'/>
    <img src='https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-05.png.webp' sizes='20px'/>
    </div>
    <p className='text-[#b2b2b2] text-sm mt-10 text-center'> ©2023 All rights reserved | This template is made with <span className=' text-[20px] font-bold uppercase font-[italy]'>love</span> by Ahmed-mehana  </p>
    </div>
    </div>
  )
}

export default Footer