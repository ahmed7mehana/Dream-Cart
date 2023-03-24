import Link from "next/link";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';


function Main() {
  const slides = [
    {
      url: 'https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg.webp',
      title:"women collection 2023",
      sub:"new season",
      Button:" px-14 py-2 rounded-[50px] text-lg font-bold text-white mt-10 bg-[#717fe0]        bg-blue-500 text-white font-bold py-2 px-4 rounded-full animate-left"
    },
    {
      url: 'https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg.webp',
         title:"Men new-season",
      sub:"jackets",
      Button:" px-14 py-2 rounded-[50px] text-lg font-bold  mt-10  bg-blue-500 text-white font-bold py-2 px-4 rounded-full animate-top",

    },
    {
      url: 'https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg.webp',
      title:"Men collection 2023",
      sub:"new arrivals",
      Button:"px-14 py-2 rounded-[50px] text-lg font-bold  mt-10 bg-blue-500 text-white font-bold py-2 px-4 rounded-full animate-right",

    },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=' absolute top-0 max-w-[1400px] h-full w-full m-auto   relative group '>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-screen  bg-center bg-cover duration-500'
      >
<div className="relative top-[30%] px-3 lg:px-10  w-auto text-[#333]">
<h2 className=" text-[30px]   animate-bounce font-[Poppins-Regular] leading-relaxed ">{slides[currentIndex].title}</h2>
<p className=" sm:text-7xl text-5xl uppercase font-[PlayfairDisplay-Bold]   leading-relaxed">{slides[currentIndex].sub}</p>
<Link  href="/Allproducts"><button id="left-btn" className={slides[currentIndex].Button}>Shop now</button>
</Link>

</div>

      </div>

      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
   
 


    </div>
  );
}

export default Main;