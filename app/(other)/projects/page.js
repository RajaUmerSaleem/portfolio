import React from 'react'

const page = () => {
  return (
    <main className="h-[90%] w-[100%] pt-4">
      <div className='h-[10vh] text-4xl font-bold flex items-center pl-10 text-white'>
        Projects
      </div>
      <div className='h-[40%] w-[100%] flex justify-center items-center'>
        <video controls className="w-[50%] m-1 h-full object-cover border border-green-500 ">
          <source src="ecommerce.mp4" type="video/mp4" />
        </video>
        <video controls className="w-[50%] m-1 h-full object-cover border border-green-500 ">
          <source src="Twiter_X_clone.mp4" type="video/mp4" />
        </video>
      </div>
      <div className='h-[45%] w-[100%] flex justify-center items-center bg-slate-100'>
      </div>
    </main>
  )
}
export default page
