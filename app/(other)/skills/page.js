"use client"
import React, { memo } from 'react';
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

const skills = [
  { name: 'HTML5', icon: FaHtml5, size: 150 },
  { name: 'CSS3', icon: SiCss3, size: 130 },
  { name: 'Tailwind CSS', icon: RiTailwindCssFill, size: 150 },
  { name: 'Next.js', icon: SiNextdotjs, size: 140 },
  { name: 'React.js', icon: SiPreact, size: 140 },
  { name: 'Postman', icon: SiPostman, size: 140 },
  { name: 'Bootstrap', icon: SiBootstrap, size: 140 },
  { name: 'GitHub', icon: FaGithubSquare, size: 150 },
  { name: 'Git', icon: FaGitAlt, size: 150 },
  { name: 'JavaScript', icon: FaJs, size: 150 },
  { name: 'Node.js', icon: IoLogoNodejs, size: 150 },
  { name: 'Express', icon: SiExpress, size: 140 },
  { name: 'Chart.js', icon: SiChartdotjs, size: 140 },
  { name: 'MongoDB', icon: SiMongodb, size: 140 },
];

const SkillsPage = () => {
  return (
    <>
      <div className='h-[10vh] mt-16 text-4xl font-bold flex items-center pl-16 text-white'>
        Skills
      </div>
      <div className='flex justify-center flex-wrap h-[80vh] w-[100%] overflow-scroll overflow-x-hidden custom-scrollbar'>
      <div className="text-gray-200 text-center p-4 italic">
          <span className="text-green-500">Note:</span> As a Computer Scientist, I am always learning new technologies and tools. The list below is not cover all my skills, but it does represent the technologies I have used most frequently in my Web Developement projects.
          Currently, I am Learning and Building AI, Advance DBMS and Blockchain.
  </div>
        {skills.map((skill, index) => (
          <div key={index} className='w-[180px] h-[180px] m-2 flex flex-col justify-center items-center bg-gray-800 hover:bg-green-500 transition-colors'>
            <skill.icon size={skill.size} className="text-white" />
            <span className="mt-2  font-bold text-white">{skill.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default memo(SkillsPage);