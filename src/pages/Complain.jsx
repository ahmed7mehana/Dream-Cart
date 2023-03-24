import React from 'react'

function Complain() {
  return (
    <div style={{width:"100%" , top:"10%"}} className=' ml-10 absolute p-10  col-span-3  h-auto shadow-xl rounded-xl lg:p-4'>
    <div className='p-4'> 
      <form
        action='https://getform.io/f/2652ea4c-11c4-405a-8d7d-a1f5c4ae5175'
        method='POST'
        encType='multipart/form-data'
      >
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Name</label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300'
              type='text'
              name='name'
            />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>
              Phone Number
            </label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300'
              type='text'
              name='phone'
            />
          </div>
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
          <label className='uppercase text-sm py-2'>Subject</label>
          <input
            className='border-2 rounded-lg p-3 flex border-gray-300'
            type='text'
            name='subject'
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
        <button className='w-fit p-2  text-gray-100 mt-4 text-center font-bold   bg-slate-400 rounded-3xl py-1 px-6 uppercase hover:bg-black hover:text-white  duration-500'>
          Send Message
        </button>
      </form>
    </div>
  </div>
  )
}

export default Complain