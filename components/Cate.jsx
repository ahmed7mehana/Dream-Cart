import Link from 'next/link'
import React from 'react'

function Cate() {
  return (
    <div className=' m-auto flex flex-wrap mt-[100px] mb-[100px] p-2 '>

    <div className='w-full lg:w-[350px] border-solid border-2 border-gray-400 rounded   m-auto    '>
    <div  style={{ backgroundImage:`url(https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg.webp)` }}
    className=' w-full  h-[300px] lg:h-[250px]  bg-center bg-cover duration-500'>

    <div className='relative top-0 left-0 w-full h-full hover:bg-[#717fe0]/70  hover:!text-white duration-500  cursor-pointer'>
    <h2 className=' ml-7 text-[30px] font-bold'>women</h2>
    <p className=' ml-7 mb-5'>spring2023</p>
    <Link href={"/Allproducts"} className="  ml-5 mt-8 px-5 py-2 rounded-[50px] hover:animate-bounce text-lg font-bold   bg-[#717fe0]">Shop now</Link>

    </div>


    </div>
    </div>


    <div className='w-full lg:w-[350px] border-solid border-2 border-gray-400 rounded   m-auto '>
    <div  style={{ backgroundImage:`url(https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg.webp)` }}
    className=' w-full h-[300px] lg:h-[250px]   bg-center bg-cover duration-500'>
    <div className='relative top-0 left-0 w-full h-full hover:bg-[#717fe0]/70  hover:!text-white duration-500 cursor-pointer'>
    <h2 className=' ml-7 text-[30px] font-bold'>men</h2>
    <p className=' ml-7 mb-5'>spring2023</p>
    <Link href={"/Allproducts"} className="  ml-5 mt-8 px-5 py-2 rounded-[50px] hover:animate-bounce text-lg font-bold   bg-[#717fe0]">Shop now</Link>

    </div>
    </div>
    </div>


    <div className='w-full lg:w-[350px] border-solid border-2 border-gray-400 rounded  m-auto '>
    <div  style={{ backgroundImage:`url(https://preview.colorlib.com/theme/cozastore/images/banner-03.jpg.webp)` }}
    className=' w-full h-[300px] lg:h-[250px]  bg-center bg-cover duration-500 '>
    <div className='relative top-0 left-0 w-full h-full hover:bg-[#717fe0]/70  hover:!text-white duration-500 cursor-pointer'>
    <h2 className=' ml-7 text-[30px] font-bold'>Accessories</h2>
    <p className=' ml-7 mb-5'>New Trend</p>
    <Link href={"/Allproducts"} className="  ml-5 mt-8 px-5 py-2 rounded-[50px] hover:animate-bounce text-lg font-bold   bg-[#717fe0]">Shop now</Link>

    </div>
    </div>
    </div>
    </div>
  )
}

export default Cate