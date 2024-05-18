import Hero from "@/components/Hero";
import Image from "next/image";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { IoMdHome } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
export default function Home() {
  return (
    <main className="bg-black-100 relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            {
              name: "Home",
              link: "/",
              icon: (
                <IoMdHome className="h-4 w-4 text-neutral-500 dark:text-white" />
              ),
            },
            {
              name: "About",
              link: "/about",
              icon: (
                <FaRegUserCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
              ),
            },
            {
              name: "Contact",
              link: "/contact",
              icon: (
                <MdOutlineContactPhone className="h-4 w-4 text-neutral-500 dark:text-white" />
              ),
            },
          ]}
        />
        <Hero />
      </div>
    </main>
  );
}
