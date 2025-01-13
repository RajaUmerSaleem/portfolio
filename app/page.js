import Image from "next/image";
import Nav from "./components/nav";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
export default function Home() {
  return (
    <main className=" h-[100%] w-[100%]  m-auto sm:w-[60%]">
      <Nav />
      <div className="w-full h-[70vh] flex gap-3 py-4">
        <div className="w-1/2 h-[100%]  flex justify-center items-center">
          <div className="p-6 text-center text-white h-[80%] ">
            <h1 className="font-bold text-white text-wrap  text-[50px]">
              Full Stack Web Developer
            </h1>
            <p className="mt-4 text-xl">
              Passionate about building <span className="text-green-500 text-[25px]">SEO-friendly</span>,
              <span className="text-green-500 text-[25px]"> optimized</span>, and
              <span className="text-green-500 text-[25px]"> responsive</span> websites that help businesses <span className="text-green-500 text-[25px]"> grow faster</span>.
            </p>
            <div className=" h-[20%] flex justify-center items-center gap-[8px]">
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
        <div className="w-1/2 h-[100%]  flex justify-center items-center relative">
          <div className="neon-border">
            <Image src="/profile.png" alt="Picture of the author" width={300} height={300} className="border border-hidden rounded-full" />
          </div>
        </div>
      </div>
      <div>
        <footer className="w-full h-[20vh] font-mono text-2xl flex justify-center items-center text-white">
          Ready to Take Your Business to the Next Level?
        </footer>
      </div>
    </main>
  );
}
