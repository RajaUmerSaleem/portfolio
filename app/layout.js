import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { IoLogoWhatsapp } from "react-icons/io";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Raja Umer Saleem",
  description: "Full Stack Web Developer | SEO Specialist | React Developer | Next.js Developer | Tailwind CSS Developer | Node.js Developer | Express.js Developer | MongoDB Developer | MERN Stack Developer | Chartjs Developer | Framer Motion ",  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-black h-[100vh] w-[100vw] m-0 p-0 overflow-hidden">
        {children}
        </div>
        <a href="https://wa.me/03034506235?text=Hello%20Raja%20Umer%20Saleem,%20I%20would%20like%20to%20contact%20you."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 md:right-20 right-4 bg-gray-500 bg-opacity-50 backdrop-blur-lg rounded-full text-green-500 hover:text-green-600 transition-colors z-50">
          <IoLogoWhatsapp size={40} />
        </a>
      </body>
    </html>
  );
}
