import Link from 'next/link';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClose ,AiOutlineShopping } from "react-icons/ai";
import { addCart } from 'rtk/Slices/CartSlice';
import { deletewish } from 'rtk/Slices/Wishlistslice';


function Wish({show,handil}) {
    const wishlist = useSelector((state)=>state.wishlist)
    const dispatch = useDispatch()

  return (
    <div className={show?" top-0 right-0 z-[100] !fixed w-[60%] sm:w-[40%] h-full border rounded-lg bg-white overflow-scroll translate-x-1 duration-700":" translate-x-1 duration-700  top-0 right-[-100%] z-[100] !fixed w-[40%] h-full border rounded-lg bg-white overflow-scroll"}>
    <h2 className='font-bold sm:text-4xl text-center mt-5 uppercase'>wishlist</h2>
    <AiOutlineClose onClick={handil} size={25} className=' absolute top-0 right-0 cursor-pointer m-2  m-3 bg-white text-black rounded-3xl py-1 px-2 w-fit uppercase hover:bg-black hover:text-white font-bold duration-500 '/>
    <ul>
    {wishlist.map((wish)=>(
      
      <div className='border-t-2 m-3 '>
      <AiOutlineClose size={25} onClick={()=>{dispatch(deletewish(wish.id))}} className=' relative top-0 right-0 cursor-pointer m-2  m-3 bg-white text-black rounded-3xl py-1 px-2 w-fit uppercase hover:bg-black hover:text-white font-bold duration-500 '/>

<li className='sm:m-4 sm:p-3  flex justify-center items-center sm:flex-row flex-col '>
<div className=' flex flex-row items-center w-full sm:w-[50%]'>
<img src={wish.image} className=' rounded w-full sm:w-[7rem] h-[7rem] ' />
<p>{wish.title}</p>
</div>
<p className=' border-solid border-2 border-gray-400 rounded text-center hover:bg-[#717fe0] hover:text-white   duration-500 p-1' >{wish.price}$</p>

<div className='flex flex-col items-center justify-center'>
<Link  href={'/Details/'+wish.id} className=" m-1 text-sm bg-white text-black rounded-3xl py-1 px-2 w-fit uppercase hover:bg-black hover:text-white font-bold duration-500">Quick view</Link>
<AiOutlineShopping className='  hover:bg-[#717fe0] hover:text-white   rounded-full duration-500  cursor-pointer' size={25} onClick={()=>{dispatch(addCart(wish))}}/>
</div>
</li>
</div>

    ))}
    </ul>
  </div>
  )
}

export default Wish