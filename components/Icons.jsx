import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import {  AiOutlineShopping ,AiOutlineKey, AiOutlineHeart,AiOutlineShop,AiFillFire} from "react-icons/ai";
import {  useSelector } from 'react-redux';
import Wish from './Wish';
import Searchbar from './Searchbar';
import { useTheme } from 'next-themes';

function Icons() {
    const [show,setshow]=useState(false)
    const handil=()=>{
        setshow(!show)
    }

    const [Search,setSearch]=useState(false)
    const handilSearch=()=>{
      setSearch(!Search)
  }

    const wishlist = useSelector((state)=>state.wishlist)

    const [bgcolor, setbgcolor] = useState("transparent");


    useEffect(() => {
        const bgColor = () => {
          if (window.scrollY >= 550) {
            setbgcolor("#333");
          } else {
            setbgcolor("#eee");
          }
        };
        window.addEventListener("scroll", bgColor);
      }, []);
    

      const{theme,setTheme}=useTheme()



  return (
<>
<div className=' fixed top-[30%] right-0 z-50 '>
<div 
style={{ backgroundColor: `${bgcolor}`}}
className=' p-1 rounded-lg duration-500'>
<div className="flex font-bold flex-col">
<Link href={"/"}>
<AiOutlineShop className="text-[#666666] hover:bg-[#717fe0] rounded-lg hover:text-[white] duration-500 " size={20} style={{ margin:3 }}/>
</Link>

<Link href={"/Cart"}>
<AiOutlineShopping className="text-[#666666] hover:bg-[#717fe0] rounded-lg hover:text-[white] duration-500 " size={20} style={{ margin:3 }}/>
</Link>

<AiOutlineKey onClick={handilSearch} className="text-[#666666] hover:bg-[#717fe0] rounded-lg hover:text-[white] duration-500 " size={20} style={{margin:3 }}/>

<AiOutlineHeart onClick={handil} className="text-[#666666] hover:bg-[#717fe0] rounded-lg hover:text-[white] duration-500  " size={20} style={{ margin:3 }}/>

<AiFillFire  onClick={()=>{setTheme(theme==="dark"?"light":"dark")}} className="text-[#666666] hover:bg-[#717fe0] rounded-lg hover:text-[white] duration-500  " size={20} style={{ margin:3 }}/>


</div>
</div>
</div>

<Searchbar Search={Search} style={{ backgroundColor: `${bgcolor}`}}  />
 <Wish show={show} handil={handil}/>

</>
)
}

export default Icons