import Link from 'next/link'
import React from 'react'

function Top() {
  return (
    <div className='flex flex-wrap absolute top-0 sm:relative   w-full  justify-between items-center sm:px-9 px-2 bg-black text-[#b2b2b2] text-[12px] Poppins-Regular '>
    <p>Free shipping for standard order over $100    </p>
    <div className=''>
    <Link className='border-r-2 border-l-2 border-[#b2b2b2] hover:text-[#717fe0]  duration-300 p-2 sm:px-6 px-2'  href="/">Help &FAQs</Link>
    <Link className='border-r-2   border-[#b2b2b2] hover:text-[#717fe0]  duration-300 p-2 sm:px-6 px-2'  href="/account">My Account</Link>
    <button className='border-r-2   border-[#b2b2b2] hover:text-[#717fe0]  duration-300 p-2 sm:px-6 px-2' >En</button>
    <button className='border-r-2   border-[#b2b2b2] hover:text-[#717fe0]  duration-300 p-2 sm:px-6 px-2' >Usd</button>
    </div>
    </div>
  )
}

export default Top 