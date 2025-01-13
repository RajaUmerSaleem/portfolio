import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { SiCss3 } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { SiPreact } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { SiChartdotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiXampp } from "react-icons/si";
const page = () => {
  return (
    <>
      <div className='h-[10vh] text-4xl font-bold flex items-center pl-10 text-white'>
        Skills
      </div>
      <div className='flex justify-center flex-wrap h-[80vh] w-[100%] overflow-scroll overflow-x-hidden custom-scrollbar'>
        <div className='w-[150px] h-[150px] m-2 flex justify-center items-center bg-gray-800 hover:bg-green-500 transition-colors'>
          <FaHtml5 size={150} className="text-white" />
        </div>
        <div className='w-[150px] h-[150px] m-2 flex justify-center items-center bg-gray-800 hover:bg-green-500 transition-colors'>
          <SiCss3 size={130} className="text-white" />
        </div>
        <div className='w-[150px] h-[150px] m-2 flex justify-center items-center bg-gray-800 hover:bg-green-500 transition-colors'>
          <RiTailwindCssFill size={150} className="text-white" />
        </div>
        <div className='w-[150px] h-[150px] m-2 flex justify-center items-center bg-gray-800 hover:bg-green-500 transition-colors'>
          <SiNextdotjs size={140} className="text-white" />
        </div>
        <div className='w-[150px] h-[150px] m-2 flex justify-center items-center bg-gray-800 hover:bg-green-500 transition-colors'>
          <SiPreact size={140} className="text-white" />
        </div>
        <div className='w-[150px] h-[150px] m-2 flex justify-center items-center bg-gray-800 hover:bg-green-500 transition-colors'>
          <SiPostman size={140} className="text-white" />
        </div>
        <div className='w-[150px] h-[150px] m-2 flex justify-center items-center bg-gray-800 hover:bg-green-500 transition-colors'>
          <SiBootstrap size={140} className="text-white" />
        </div>
        <div className='w-[150px] h-[150px] m-2 flex justify-center items-center bg-gray-800 hover:bg-green-500 transition-colors'>
          <FaGithubSquare size={150} className="text-white" />
        </div>
        <div className='w-[150px] h-[150px] m-2 flex justify-center items-center bg-gray-800 hover:bg-green-500 transition-colors'>
          <FaGitAlt size={150} className="text-white" />
        </div>
        <div className='w-[150px] h-[150px] m-2 flex justify-center items-center bg-gray-800 hover:bg-green-500 transition-colors'>
          <FaJs size={150} className="text-white" />
        </div>
        <div className='w-[150px] h-[150px] m-2 flex justify-center items-center bg-gray-800 hover:bg-green-500 transition-colors'>
          <IoLogoNodejs size={150} className="text-white" />
        </div>
        <div className='w-[150px] h-[150px] m-2 flex justify-center items-center bg-gray-800 hover:bg-green-500 transition-colors'>
          <SiExpress size={140} className="text-white" />
        </div>
        <div className='w-[150px] h-[150px] m-2 flex justify-center items-center bg-gray-800 hover:bg-green-500 transition-colors'>
          <SiChartdotjs size={140} className="text-white" />
        </div>
        <div className='w-[150px] h-[150px] m-2 flex justify-center items-center bg-gray-800 hover:bg-green-500 transition-colors'>
          <SiMongodb size={140} className="text-white" />
        </div>
        <div className='w-[150px] h-[150px] m-2 flex justify-center items-center bg-gray-800 hover:bg-green-500 transition-colors'>
          <SiXampp size={130} className="text-white " />
        </div>
      </div>
    </>
  )
}

export default page
