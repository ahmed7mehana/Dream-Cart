import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose ,AiOutlineShopping ,AiOutlineKey, AiOutlineHeart,AiFillFire} from "react-icons/ai";
import Footer from "./Footer";
import Top from "./Top";

const Navba = () => {
  const{theme,setTheme}=useTheme()

  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [top, setTop] = useState(30);

  const{data:session}=useSession()
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 60) {
        setColor("#333");
        setTextColor("#333");
      } else {
        setColor("transparent");
        setTextColor("#333333");
      }
    };
    window.addEventListener("scroll", changeColor);

  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const isTop = window.scrollY > 60;
        setTop(isTop ? 0 : 30);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
<div>
<div className=" hidden sm:contents  ">
<Top />
</div>

<div
style={{background:`${color}`, top:top}}
className="fixed left-0 sm:dark:bg-black  bg-black  w-full z-10 ease-in duration-300 px-0 py-2 sm:px-10 sm:py-2  "
>
<div className="max-w-[1240px] m-auto flex justify-between items-center p-1 sm:p-3 ">
  <Link href="/">
    <h1 className="font-bold text-[25px] text-white">
    Baradise
    </h1>
  </Link>
  <ul 
   className="hidden sm:flex font-bold  text-white">
    <li className="p-2  ">
      <Link  className=" text-[#717fe0]" href="/" >Home</Link>
    </li>
    <li className="p-2">
      <Link  className=" hover:text-[#717fe0] duration-500"  href="/Allproducts">Shop</Link>
    </li>


<li className="p-2">
<Link  className=" hover:text-[#717fe0] duration-500"  href="/About">About</Link>
</li>
<li className="p-2">
<Link  className=" hover:text-[#717fe0] duration-500"  href="/Contact">contact</Link>
</li>
<li className="p-2">
<Link  className={session?" hidden":"  bg-white text-black rounded-3xl py-1 px-2   hover:bg-black hover:text-white font-bold duration-500"}  href="/login">logIn</Link>
</li>
<li className="p-2  flex items-center">
<AiFillFire className=" dark:text-red-500 hover:text-white font-bold duration-500 " onClick={()=>{setTheme(theme==="dark"?"light":"dark")}}/>
</li>

</ul>



  
  {/* Mobile Button */}
  <div onClick={handleNav} className="block sm:hidden z-10">
    {nav ? (
      <AiOutlineClose size={20} className="!text-white" style={{ color: `${textColor}` }} />
    ) : (
      <AiOutlineMenu size={20} className="text-white" />
    )}
  </div>

  {/* Mobile Menu */}


  <div
    className={
      nav
        ? "sm:hidden absolute top-[60px]  left-0  bottom-0  justify-center flex flex-wrap flex-col  items-center w-[250px] rounded h-max bg-[#717fe0] text-center ease-in duration-300"
        : "sm:hidden absolute top-[60px]  left-[-100%]  bottom-0  justify-center flex flex-wrap flex-col items-center w-[250px] rounded h-max bg-[#717fe0] text-center ease-in duration-300"
    }
  >

    <ul className=" text-white ">
    <li
    onClick={handleNav}
    className="p-4 text-4xl hover:text-gray-500"
  >
  <Link  href="/account" >my account</Link>
  </li>
      <li
        onClick={handleNav}
        className="p-4 text-4xl hover:text-gray-500"
      >
      <Link  href="/" >Home</Link>
      </li>
      <li
        onClick={handleNav}
        className="p-4 text-4xl hover:text-gray-500"
      >
      <Link href="/Allproducts">Shop</Link>
      </li>



  <li
  onClick={handleNav}
  className="p-4 text-4xl hover:text-gray-500"
>
<Link href="/About">About</Link>
</li>
<li
onClick={handleNav}
className="p-4 text-4xl hover:text-gray-500"
>
<Link href="/Contact">contact</Link>
</li>

    </ul>
  </div>

</div>
</div>
</div>
  );
};

export default Navba;
