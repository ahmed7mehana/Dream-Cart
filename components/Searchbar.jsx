import React, { useState } from 'react'
import products from '/products.json';
import { AiOutlineMenu, AiOutlineClose ,AiOutlineShopping ,AiOutlineKey, AiOutlineHeart,AiOutlineStar} from "react-icons/ai";
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addwish } from 'rtk/Slices/Wishlistslice';

function Searchbar({handilSearch,Search}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch()

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const results = products.products.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);

    setShow(!show)
  };

  return (
    <div className={Search?"fixed top-[34%] rounded w-[70%] sm:w-[40%] z-20 right-11 translate-x-1 duration-700":"fixed top-[34%] rounded w-[40%] z-20 right-[-100%] translate-x-1 duration-700"}>
    <form onSubmit={handleSubmit}>
    <input value={searchTerm}  onChange={handleChange} className=' focus:bg-[#717fe0] w-full focus:text-white focus:font-bold rounded-lg px-2 text-center' placeholder='Hoodie'/>
    </form>
 {show?(

  <ul className=' dark:bg-black bg-slate-600 rounded p-2 h-[400px] overflow-scroll '>
  {searchResults.map(item => (
    <li key={item.id} className="  border-solid border-2 border-white p-1">
    <div className=' relative border-solid border border-gray-400 rounded  m-auto transform hover:scale-[1.02] duration-500'>
    <div className='  m-auto flex flex-col  sm:flex-row items-center    '>
    <div className='flex flex-col'>
    <img src={item.image} alt="img" className='w-[200px] rounded  h-[200px]  '/>
    </div>
    
    
    
    <p className=' m-5 p-1 border-solid border border-gray-400 rounded text-center hover:bg-[#71e0a8] hover:text-white text-sm font-medium duration-500' > {item.price}$</p>
    
    <div className='flex sm:flex-row flex-col justify-center flex-wrap items-center '>
    <AiOutlineShopping className='m-1  hover:bg-[#71e0a8] hover:text-white  rounded duration-500  cursor-pointer ' size={20} onClick={()=>{dispatch(addCart(item))}}/>
    <AiOutlineHeart  className='m-1  hover:bg-[#71e0a8] hover:text-white  rounded duration-500  cursor-pointer'  size={20} onClick={()=>{dispatch(addwish(item))}} />
    <Link  href={'/Details/'+item.id} className=" bg-white text-black rounded-3xl py-1 px-2 hover:bg-[#71e0a8] cursor-pointer hover:text-white font-bold text-sm duration-500">Quick view</Link>
    </div>
    
    </div>
    </div>
    </li>
  ))}
  </ul>
  
 ):""}
 

    </div>
  )
}

export default Searchbar




