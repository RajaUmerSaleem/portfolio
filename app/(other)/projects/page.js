import React from 'react'

const page = () => {
  return (
    <main className="h-[90%] w-[100%] pt-4">
      <div className='h-[40%] w-[100%] flex justify-center items-center'>
      <video autoPlay controls className="w-[50%] h-full object-cover border border-green-500 ">
          <source src="ecommerce.mp4" type="video/mp4" />
        </video>
      </div>
    </main>
  )
}

export default page
