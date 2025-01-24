"use client"
import React, { memo } from 'react';
import Image from "next/image";
import Nav from "./components/nav";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <main className="h-full w-full m-auto sm:w-[90%] md:w-[80%] lg:w-[60%] overflow-scroll custom-scrollbar">
        <Nav />
        <div className="w-full h-auto flex flex-col-reverse md:flex-row md:mt-[10vh] gap-3 py-4 ">
          <div className="w-full md:w-1/2 h-auto flex justify-center items-center">
            <div className="p-6 text-center text-white">
              <h1 className="font-bold text-white text-wrap text-4xl md:text-5xl lg:text-6xl">
                Full Stack Web Developer
              </h1>
              <p className="mt-4 text-lg md:text-xl lg:text-2xl">
                Passionate about building <span className="text-green-500">SEO-friendly</span>,
                <span className="text-green-500"> optimized</span>, and
                <span className="text-green-500"> responsive</span> websites that help businesses <span className="text-green-500"> grow faster</span>.
              </p>
              <div className="mt-4 flex justify-center items-center gap-4 ">
                <a href="https://www.linkedin.com/in/raja-umer-saleem" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                  <BsLinkedin size={30} />
                </a>
                <a href="https://github.com/RajaUmerSaleem" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                  <FaSquareGithub size={35} />
                </a>
                <a href="/MERNCV.pdf" download className="hover:text-green-500 transition-colors">
                  <FaFileDownload size={30} />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-auto flex justify-center items-center relative mt-4 md:mt-0">
            <div className="neon-border relative">
              <Image src="/profile.png" alt="Picture of the author" width={300} height={300} className="border border-hidden rounded-full" />
              <div className="absolute bottom-0 right-0 flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-blink"></div>
                <span className="ml-2 text-white text-xs">Available for work</span>
              </div>
            </div>
          </div>
        </div>
        <footer className="w-full h-[10vh] font-bold text-xl md:text-4xl md:font-extrabold flex justify-center items-center text-white text-center">
          Ready to Take Your Business to the Next Level?
        </footer>
      </main>
    </>
  );
};

export default memo(Home);