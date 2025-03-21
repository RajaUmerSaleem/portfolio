import React, { memo } from 'react';
import Image from 'next/image';

const Projects = () => {
  return (
    <main className="h-[90vh] w-[100%] pt-16 ">
      <div className="h-[10%] text-4xl font-bold flex items-center pl-10 text-white">
        Projects
      </div>
      <div className="h-[80vh] w-[100%] flex flex-col gap-2 custom-scrollbar overflow-scroll overflow-x-hidden pb-3">
  <div className="text-gray-200 text-center p-4 italic">
    Showing proofs are more powerful than testimonials. Clients dont need promises, they need their work done well.
  </div>
        <div className="h-auto w-[100%] flex flex-col md:flex-row justify-center items-center px-2 gap-2">
          <div className="w-full md:w-[50%] m-1 h-full">
            <video controls className="w-full h-full object-cover border border-green-500" loading="lazy" poster="/ecommerce.jpg">
              <source src="ecommerce.mp4" type="video/mp4" />
            </video>
            
          </div>
          <div className="w-full md:w-[50%] m-1 h-full">
            <Image
              src="/auto.jpg"
              alt="Three.js project"
              width={400}
              height={300}
              quality={100}
              className="w-full h-full border border-green-500"
              loading="lazy"
            />
            
          </div>
        </div>
        <div className="h-auto w-[100%] flex flex-col md:flex-row justify-center items-center px-2 gap-2">
          <div className="w-full md:w-[50%] m-1 h-full">
            <Image
              src="/zikrapp.jpg"
              alt="Zikr app"
              width={400}
              height={300}
              quality={100}
              className="w-full h-full border border-green-500"
              loading="lazy"
            />
            
          </div>
          <div className="w-full md:w-[50%] m-1 h-full">
            <video controls className="w-full h-full object-cover border border-green-500" loading="lazy" poster="/SE.jpg">
              <source src="se.mp4" type="video/mp4" />
            </video>
            
          </div>
        </div>
        <div className="h-auto w-[100%] flex flex-col md:flex-row justify-center items-center px-2 gap-2">
          <div className="w-full md:w-[50%] m-1 h-full">
            <video controls className="w-full h-full object-cover border border-green-500" loading="lazy" poster="/ultra.jpg">
              <source src="ultra.mp4" type="video/mp4" />
            </video>
            
          </div>
          <div className="w-full md:w-[50%] m-1 h-full">
            <Image
              src="/2.jpg"
              alt="Data Visvulisation"
              width={400}
              height={300}
              quality={100}
              className="w-full h-full border border-green-500"
              loading="lazy"
            />
          </div>
        </div>
        <div className="text-gray-200 text-center p-4 italic">
          <span className="text-green-500">Note:</span> All projects mentioning here are not appropiate for public display. Please contact me for more details.
  </div>
      </div>
    </main>
  );
};

export default memo(Projects);