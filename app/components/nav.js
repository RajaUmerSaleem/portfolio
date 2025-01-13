import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="w-[100%] h-[10vh] bg-black flex">
      <div className="flex w-1/2 h-full justify-normal items-center px-7 text-white">
        <Link legacyBehavior href="/">
          <a className="font-bold text-green-400">Raja Umer Saleem</a>
        </Link>
      </div>
      <div className="flex w-1/2 h-full">
        <ul className="flex h-full">
          <li className="flex h-full items-center">
            <Link legacyBehavior href="/">
              <a className="hover:underline font-semibold text-white transition duration-300">Home</a>
            </Link>
          </li>
          <li className="flex h-full items-center px-4">
            <Link legacyBehavior href="/projects">
              <a className="hover:underline font-semibold text-white transition duration-300">Projects</a>
            </Link>
          </li>
          <li className="flex h-full items-center px-4">
            <Link legacyBehavior href="/skills">
              <a className="hover:underline font-semibold text-white transition duration-300">Skills</a>
            </Link>
          </li>
          <li className="flex h-full items-center px-4">
            <Link legacyBehavior href="/education">
              <a className="hover:underline font-semibold text-white transition duration-300">Education</a>
            </Link>
          </li>
          <li className="flex h-full items-center px-4">
            <a
              href="https://wa.me/03034506235?text=Hello%20Raja%20Umer%20Saleem,%20I%20would%20like%20to%20contact%20you."
              className="hover:underline font-mono text-black transition duration-300 rounded-full bg-green-400 py-1 px-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;