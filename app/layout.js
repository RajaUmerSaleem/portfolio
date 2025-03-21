"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { IoLogoWhatsapp } from "react-icons/io";
import LoadingSpinner from "./components/load";
import { useState, useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Raja Umer Saleem</title>
        <meta name="description" content="Full Stack Web Developer | SEO Specialist | React Developer | Next.js Developer | Tailwind CSS Developer | Node.js Developer | Express.js Developer | MongoDB Developer | MERN Stack Developer | Chartjs Developer | Framer Motion" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {loading && <LoadingSpinner />}
        <div className="bg-black h-[100vh] w-[100vw] m-0 p-0 overflow-hidden grid">
          {children}
        </div>
        <a href="https://wa.me/03034506235?text=I%20want%20to%20contact%20to%20collaborate%20on%20Website%20project"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 md:right-20 right-4 bg-gray-500 bg-opacity-50 backdrop-blur-lg rounded-full text-green-500 hover:text-green-600 transition-colors z-50">
          <IoLogoWhatsapp size={40} />
        </a>
      </body>
    </html>
  );
}