import React from 'react';
import Link from 'next/link';
import { IoLogoWhatsapp } from "react-icons/io";

const Nav = () => {
  return (
    <nav className="w-full h-[10vh] bg-black flex items-center justify-between px-4">
      <div className="flex items-center text-white">
        <Link legacyBehavior href="/">
          <a className="font-bold text-green-400 text-lg">Raja Umer Saleem</a>
        </Link>
      </div>
      <div className="flex items-center md:static absolute top-1 right-1 md:bg-transparent bg-gray-950 rounded-lg">
        <ul className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 text-center md:text-left">
          <li className="flex justify-center items-center">
            <Link legacyBehavior href="/">
              <a className="hover:underline font-semibold text-white transition duration-300">Home</a>
            </Link>
          </li>
          <li className="flex justify-center items-center">
            <Link legacyBehavior href="/projects">
              <a className="hover:underline font-semibold text-white transition duration-300">Projects</a>
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
          <li className="flex justify-center items-center">
            <a
              href="https://wa.me/03034506235?text=Hello%20Raja%20Umer%20Saleem,%20I%20would%20like%20to%20contact%20you."
              className="font-mono text-black rounded-full bg-green-400 py-1 px-3 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;