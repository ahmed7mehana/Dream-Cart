import Footer from 'components/Footer';
import Head from 'next/head';
import Image from 'next/image';
import { AiFillMail,AiFillPhone,AiOutlineEnvironment } from 'react-icons/ai';

const Contact = () => {
  return (
    <div className=" absolute w-full top[50%]">
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className=" relative top-0 left-0 w-full h-[300px] ">
        <Image
        src="/image/bgcontact.jpg"
          alt="Contact Background"
          layout="fill"
          objectFit="cover"
        />
        <h1 className='relative left[50%] top-[50%]  m-auto z-10 w-fit uppercase font-bold text-5xl text-white'>Contact </h1>
        </div>


      <div className="flex lg:flex-col justify-center flex-wrap  m-auto  " style={{padding:"20px" }} >

      <div className=" border-2  border-gray-900 rounded p-3  " style={{width:"605px"}}>
      <h2 className='font-bold uppercase'>get tech with  Us</h2>
      <form 
      action='https://getform.io/f/2652ea4c-11c4-405a-8d7d-a1f5c4ae5175'
      method='POST'
      encType='multipart/form-data'
    >
      <div className='grid md:grid-cols-2 gap-4 w-full py-2'>

      </div>
      <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2'>Email</label>
        <input
          className='border-2 rounded-lg p-3 flex border-gray-300'
          type='email'
          name='email'
        />
      </div>

      <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2'>Message</label>
        <textarea
          className='border-2 rounded-lg p-3 border-gray-300'
          rows='10'
          name='message'
        ></textarea>
      </div>
      <button className=' p-2  text-gray-100 mt-4 text-center font-bold w-full  bg-slate-400 rounded-3xl py-1 px-6 uppercase hover:bg-black hover:text-white  duration-500'>
        Send Message
      </button>
    </form>
      </div>


      <div className=' border-2  border-gray-900 rounded p-3  flex flex-col justify-center ' style={{width:"605px",padding:"30PX"}}>
      
      <div className='mb-7  flex item  ' style={{marginBottom:"20px"}}>
      <AiOutlineEnvironment className='mr-5' size={20}/>
      <div className='flex flex-col'>
      <p className=' text-lg font-bold ' style={{marginBottom:"20px"}}>Address</p>
      <p className='w-[70%]'>Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US </p>
      </div>
      </div>

      <div className='mb-7  flex  ' style={{marginBottom:"20px"}}>
      <AiFillPhone className='mr-5' size={20}/>
      <div className='flex flex-col'>
      <p className=' text-lg font-bold ' style={{marginBottom:"20px"}}>Lets Talk</p>
      <p>+1 800 1236879</p>
      </div>
      </div>

      <div className='mb-7  flex  '>
      <AiFillMail className='mr-5' size={20}/>
      <div className='flex flex-col'>
      <p className=' text-lg font-bold ' style={{marginBottom:"20px"}}>Sale Support</p>
      <p>contact@example.com      </p>
      </div>
      </div>
      </div>

        </div>
        
<div className="w-full h-[300px] mt-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13805.781225333286!2d-74.0059413377348!3d40.71278474604524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc09af9fdd8cdd969!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sjo!4v1646768881416!5m2!1sen!2sjo"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
</div>

<Footer/>
    </div>
  );
};

export default Contact;
