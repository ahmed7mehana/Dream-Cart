import React from 'react'
import { AiOutlineShopping , AiOutlineHeart,AiOutlineStar} from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { addCart } from 'rtk/Slices/CartSlice';
import { addwish } from 'rtk/Slices/Wishlistslice';

import products from '/products.json';

export const getStaticPaths = async () => {
    const paths = products.products.map(ninja => {
      return {
        params: { id: ninja.id.toString() }
      }
    })
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data=products.products[id-1]
  
    return {
      props: { ninja: data }
    }
  }


function Details({ninja}) {
   const dispatch = useDispatch()

  return (
    <div className='mt-20 flex flex-wrap justify-center' style={{position:'absolute' ,top:"10%",left:"50%" ,translate:"-50%"  }}>
    <div className='m-7 flex flex-col items-center' >
    <h2 className='text-center text-[27px] font-bold m-10'>{ninja.title}</h2>
    <img src={ninja.image} style={{width:"200px",margin:"auto"}}/>
    <div className=' flex'>
    <AiOutlineShopping className='m-5 hover:bg-black hover:text-white  rounded duration-500 ' size={40} onClick={()=>{dispatch(addCart(ninja))}}/>
    <AiOutlineHeart  className='m-5  hover:bg-black  hover:text-white rounded duration-500 '  size={40} onClick={()=>{dispatch(addwish(ninja))}} />
    </div>
    </div>

    <div className='text-center  font-[Open Sans] mt-10 mb-5 w-full ' >
    <div className='flex flex-wrap justify-between font-bold'>
    <p>Price: {ninja.price}$</p>
    <p>count: {ninja.rating.count }</p>
    <p className='flex justify-center items-center'>( {ninja.rating.rate }<AiOutlineStar/> )</p>
    </div>
    <p className=' font-bold mt-5'>{ninja.description}</p>

    <button className=' mt-10 text-center font-bold   bg-slate-400 rounded-3xl py-1 px-6 w-fit uppercase hover:bg-black hover:text-white  duration-500'>buy now</button>
    </div>
    </div>
  )
}

export default Details