import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "components/Footer";
/*
[1]30px
*/
const images = [
  "https://images.pexels.com/photos/2882509/pexels-photo-2882509.jpeg?auto=compress&cs=tinysrgb&w=1500",
  "https://images.pexels.com/photos/11123245/pexels-photo-11123245.jpeg?auto=compress&cs=tinysrgb&w=1500",
  "https://media.istockphoto.com/id/650407658/photo/web-layout-sketch-paper-book-mobile-and-web-sketch.jpg?s=612x612&w=0&k=20&c=RoFwX_iyYIvxToWpVYhQjafzyDe-EDB94RLC2Si8E4I=",
  "https://media.istockphoto.com/id/1355657705/photo/words-with-about-us-web-concept-idea.jpg?s=612x612&w=0&k=20&c=ZUoMs656CPr-Z9tL-aYnGMZlHqhV_2VBXKlk9gvJHMM=",
];

const AboutPage = () => {
  const [bgImageIndex, setBgImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBgImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 20000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>

    <div className=" relative top-0 left-0 w-full h-[200px] ">
    <Image
    src="/image/bgcontact.jpg"
      alt="Contact Background"
      layout="fill"
      objectFit="cover"
    />
    <h1 className='relative left[50%] top-[50%]  m-auto z-10 w-fit uppercase font-bold text-5xl text-white'>About </h1>
    </div>
    
<div className="flex items-center  flex-wrap justify-between mt-10" style={{padding:"30px"}}>

<div className="mb-10 " style={{width:"540px"}}>
<h2 className="font-bold text-[30px]">Our Story</h2>
<p className="text-sm text-[#888] font-[Poppins-Light]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
 consequat consequat enim, non auctor massa ultrices non. Morbi sed 
 odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci
  varius natoque penatibus et magnis dis parturient montes, nascetur 
  ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque 
  congue. Pellentesque habitant morbi tristique senectus et netus et malesuada 
  fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. 
  Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim
  dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec 
  condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.</p>
  <br/>
  <p>Donec gravida lorem elit, quis condimentum
 ex semper sit amet. Fusce eget ligula magna. 
 Aliquam aliquam imperdiet sodales. Ut fringilla
  turpis in vehicula vehicula. Pellentesque congue ac 
  orci ut gravida. Aliquam erat volutpat. Donec iaculis 
  lectus a arcu facilisis, eu sodales lectus sagittis. Etiam 
  pellentesque, magna vel dictum rutrum, neque justo eleifend elit, 
  vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur,
   quam velit convallis ipsum, et maximus enim ligula ac ligula.

</p>
<br/>
<p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
</p>
</div>
<div >
<div className=" border-2 !border-black w-fit">
<img src='https://images.pexels.com/photos/7521473/pexels-photo-7521473.jpeg?auto=compress&cs=tinysrgb&w=400' alt="img" className=" rounded transform hover:scale-[1.02] duration-500 " style={{margin:"-15px",marginBottom:"20px",marginLeft:"14px"}}/>
</div>
</div>
</div>


<div className="flex items-center  justify-between mt-10" style={{padding:"30px",flexWrap:"wrap-reverse"}}>

<div className="" >
<div className=" border-2 !border-black w-fit">
<img src='https://images.pexels.com/photos/7666429/pexels-photo-7666429.jpeg?auto=compress&cs=tinysrgb&w=400' alt="img" className=" rounded transform hover:scale-[1.02] duration-500 " style={{margin:"-15px", marginTop:"15px",marginRight:"15px"}}/>
</div>
</div>

<div className="mb-10 " style={{width:"540px"}}>
<h2 className="font-bold text-[30px]">Our Mission</h2>
<p className="text-sm text-[#888] font-[Poppins-Light]">Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus dignissim risus, sed consectetur erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida. Praesent sed nunc fermentum mi molestie tempor. Morbi vitae viverra odio. Pellentesque ac velit egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat odio in, porttitor ante. Ut mauris ligula, volutpat in sodales in, porta non odio. Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla lobortis. Proin at gravida ante. Mauris auctor purus at lacus maximus euismod. Pellentesque vulputate massa ut nisl hendrerit, eget elementum libero iaculis.</p>
  <br/>

  <p className=" border-l-2 border-red-500 border-solid p-3 font-sans flex flex-col">Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.
<span className="">- Steve Job’s</span>

</p>

</div>



</div>


<Footer/>
</div>
  );
};

export default AboutPage;
