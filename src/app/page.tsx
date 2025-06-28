import NavHeader from "@/components/navheader/nav_header";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen max-h-screen dark:bg-gray-900  font-mono" >

      <NavHeader header="LocalService" className="grid grid-cols-12 px-8 py-8 text-sm font-semibold text-purple-900 dark:text-slate-300" />


      <div className="flex flex-col md:flex-row flex-grow items-stretch font-sans gap-6 pt-8 md:pt-0 py-4 px-4 md:px-8 ">

        <div className="flex flex-7/12 flex-col gap-6  justify-center">

          <p className="font-extrabold text-4xl  md:text-7xl  text-purple-900 dark:text-purple-400" >Fast, Reliable Home Tech Services</p>

          <p className="font-extrabold text-lg md:text-2xl  text-purple-900 dark:text-slate-500 opacity-65 dark:opacity-100">From AC installation to wiring, fan repair to water purifier servicing — we deliver trusted, affordable, and on-time solutions for your home and office.</p>

          <div className="flex">

            <p className="text-lg px-12 py-2 text-amber-500 font-extrabold  
text-center cursor-pointer border-2 border-amber-500 hover:bg-amber-500 hover:text-white dark:hover:text-black transition duration-200 select-none  hover:shadow-2xl w-full md:w-auto" >Book a service</p>
          </div>
        </div>

        <div className="md:flex-5/12 flex-wrap flex-col items-center relative flex-grow justify-items-center order-first md:order-none">
          <Image src="./img/hero.svg" fill alt="Hero Image" className=" md:h-full drop-shadow-xl brightness-110 " />

        </div>

      </div>


      <footer className=" px-8 py-4 text-center text-purple-900 dark:text-slate-300 text-xs font-mono">

        <div className="justify-items-center ">
          &copy; 2025 LocalService. All rights reserved. Developed by TechMess
        </div>

        {/* <div className="grid grid-cols-12 w-full ">
          <div className="grid col-span-8 justify-items-start">
            Call us at +91-9854935115
          </div>

          <div className="grid col-span-4 justify-items-end ">
            &copy; 2025 LocalService. All rights reserved. Developed by TechMess
          </div>
        </div> */}

      </footer>


    </div>
  );
}
