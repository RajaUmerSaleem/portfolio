"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`w-full h-[10vh] bg-black flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-800 bg-opacity-10 backdrop-blur-lg' : ''}`}>
      <div className="flex items-center text-white">
        <Link legacyBehavior href="/">
          <a className="font-bold text-green-400 text-lg">Raja Umer Saleem</a>
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none relative z-50">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <div className={`md:flex items-center justify-around absolute top-0 left-0 md:top-10 md:right-0 w-full md:w-auto bg-black md:bg-transparent transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <ul className="flex flex-col  md:flex-row  md:space-x-4 space-y-2 md:space-y-0 text-center md:text-left w-full md:w-auto">
          <li className="flex justify-center items-center">
            <Link legacyBehavior href="/">
              <a className="hover:underline font-semibold text-white transition duration-300">Home</a>
            </Link>
          </li>
          <li className="flex justify-center items-center">
            <Link legacyBehavior href="/projects">
              <a className="hover:underline font-semibold text-white transition duration-300">Works</a>
            </Link>
          </li>
          <li className="flex justify-center items-center">
            <Link legacyBehavior href="/skills">
              <a className="hover:underline font-semibold text-white transition duration-300">Skills</a>
            </Link>
          </li>
          <li className="flex justify-center items-center">
            <Link legacyBehavior href="/education">
              <a className="hover:underline font-semibold text-white transition duration-300">Education</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;