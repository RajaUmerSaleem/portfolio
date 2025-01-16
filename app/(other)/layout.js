import "/app/globals.css";
import Nav from "@/app/components/nav";
export const metadata = {
    title: "Raja Umer Saleem",
    description: "Full Stack Web Developer | SEO Specialist | React Developer | Next.js Developer | Tailwind CSS Developer | Node.js Developer | Express.js Developer | MongoDB Developer | MERN Stack Developer | Chartjs Developer | Framer Motion ",
};

export default function RootLayout({ children }) {
    return (
        <main className="h-[100%] sm:w-[60vw] w-[100vw] m-auto ">
            <Nav />
            {children}
        </main>
    );
}
