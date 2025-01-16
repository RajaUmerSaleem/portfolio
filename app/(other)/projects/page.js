import React, { memo } from 'react';
import Image from 'next/image';

const Projects = () => {
  return (
    <main className="h-[90vh] w-[100%] pt-4">
      <div className="h-[10%] text-4xl font-bold flex items-center pl-10 text-white">
        Projects
      </div>
      <div className="h-[80vh] w-[100%] flex flex-col gap-2 custom-scrollbar overflow-scroll overflow-x-hidden pb-3">
        <div className="h-auto w-[100%] flex flex-col md:flex-row justify-center items-center px-2 gap-2">
          <video controls className="w-full md:w-[50%] m-1 h-full object-cover border border-green-500" loading="lazy">
            <source src="ecommerce.mp4" type="video/mp4" />
          </video>
          <video controls className="w-full md:w-[50%] m-1 h-full object-cover border border-green-500" loading="lazy">
            <source src="Twiter_X_clone.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="h-auto w-[100%] flex flex-col md:flex-row justify-center items-center px-2 gap-2">
          <Image
            src="/zikrapp.jpg"
            alt="Zikr app"
            width={400}
            height={300}
            quality={100}
            className="w-full md:w-[50%] m-1 h-full border border-green-500"
            loading="lazy"
          />
          <video controls className="w-full md:w-[50%] m-1 h-full object-cover border border-green-500" loading="lazy">
            <source src="se.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="h-auto w-[100%] flex flex-col md:flex-row justify-center items-center px-2 gap-2">
          <video controls className="w-full md:w-[50%] m-1 h-full object-cover border border-green-500" loading="lazy">
            <source src="ultra.mp4" type="video/mp4" />
          </video>
          <video controls className="w-full md:w-[50%] m-1 h-full object-cover border border-green-500" loading="lazy">
            <source src="netflix.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </main>
  );
};

export default memo(Projects);