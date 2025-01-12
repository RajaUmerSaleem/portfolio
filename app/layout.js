import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        <div className="bg-black h-[100vh] w-[100vw] ">
        {children}
        </div>
      </body>
    </html>
  );
}
