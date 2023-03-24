import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { addCart } from '../rtk/Slices/CartSlice';
import {fetchdata} from '../rtk/Slices/ProductSlice'
import { AiOutlineMenu, AiOutlineClose ,AiOutlineShopping ,AiOutlineCheckCircle, AiOutlineHeart,AiOutlineStar} from "react-icons/ai";
import { addwish } from 'rtk/Slices/Wishlistslice';
import products from '/products.json';


function Products() {
const dispatch = useDispatch()

const [selectedProductId, setSelectedProductId] = useState(null);
const [selcProdId, setselcProdId] = useState(null);

const handleProductSelect = (productId) => {
  setSelectedProductId(productId);
  setTimeout(() => {
    setSelectedProductId(null);
  }, 1000);
};
const handleselcProdId = (productId) => {
  setselcProdId(productId);
  setTimeout(() => {
    setselcProdId(null);
  }, 1000);
};


  return (
      <div>
      <h2 className=' text-4xl m-10 font-bold uppercase'>PRODUCT OVERVIEW</h2>
    <div  className='flex flex-wrap m-auto justify-center'>

      {products.products.slice(0,8).map((product)=>(
        <div key={product.id} className="m-3">
        <div className=' relative border-solid border border-gray-400 rounded  m-auto transform hover:scale-[1.06] duration-500'>
        <div className='sm:w-[265px] w-[255px]  m-auto flex flex-col p- items-center  '>
        <img src={product.image} alt="img" className='w-full  h-[310px] '/>
        
        
        <div className='  mt-4    flex flex-row justify-between flex-wrap items-center '>
        <h2 className=' uppercase font-bold text-sm flex  mr-2 '>{product.name} ({product.rating.rate}  <AiOutlineStar className=' text-green-500'  size={25}/> )</h2>
        <p className=' p-1 border-solid border border-gray-400 rounded text-center hover:bg-[#71e0a8] hover:text-white text-sm font-medium duration-500' >Price: {product.price}$</p>
        </div>
        
        <div className='flex flex-row flex-wrap items-center '>
        <AiOutlineShopping className={`m-5  hover:bg-[#71e0a8] hover:text-white  rounded duration-500  cursor-pointer ${selcProdId === product.id ? 'hidden' : ''} `} size={25} onClick={()=>{
          dispatch(addCart(product))
          handleselcProdId(product.id)
        }}/>
        <AiOutlineCheckCircle  className={`m-5  hover:bg-[#71e0a8] hover:text-white  rounded duration-500  cursor-pointer ${selcProdId === product.id ? ' ' : 'hidden'} `}  size={25}  />


        <AiOutlineHeart  className={`m-5  hover:bg-[#71e0a8] hover:text-white  rounded duration-500  cursor-pointer ${selectedProductId === product.id ? 'hidden' : ''} `}  size={25} onClick={()=>{
          dispatch(addwish(product))
          handleProductSelect(product.id)
        }} />
        <AiOutlineCheckCircle  className={`m-5  hover:bg-[#71e0a8] hover:text-white  rounded duration-500  cursor-pointer ${selectedProductId === product.id ? ' ' : 'hidden'} `}  size={25}  />


        <Link  href={'/Details/'+product.id} className=" bg-white text-black rounded-3xl py-1 px-3  uppercase  hover:bg-[#71e0a8] cursor-pointer hover:text-white font-bold text-sm duration-500">Quick view</Link>
        </div>
        
        </div>
        </div>
        </div>
        ))}

    </div>
    <Link className=' m-auto mt-10 mb-10 flex justify-center  rounded-3xl py-1 px-6 w-fit  uppercase hover:bg-black text-white hover:text-[#717fe0]   bg-[#717fe0]  duration-500  font-bold ' href={"/Allproducts"}>more</Link>
      </div>
  )
}

export default Products












