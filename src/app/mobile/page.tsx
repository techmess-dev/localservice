import NavHeader from "@/components/navheader/nav_header";

export default function Home() {
	return (
		<div className="flex flex-col dark:bg-gray-900 min-h-screen max-h-screen font-mono" >

			<NavHeader header="LocalService" className="grid grid-cols-12 text-sm font-semibold px-8 py-8 text-purple-900 dark:text-slate-300" />


			<div className="flex flex-grow flex-col gap-6 font-sans px-4 pt-6">

				<div className="flex flex-grow ">
					<img src="./img/hero.svg" className="drop-shadow-xl brightness-110 " />

				</div>

				<div className="flex flex-col flex-grow justify-items-center items-center  gap-4 ">
					<p className="font-extrabold text-4xl  text-purple-900 dark:text-purple-400" >Fast, Reliable Home Tech Services</p>

					<p className="font-extrabold text-lg  text-purple-900 dark:text-slate-500 opacity-65 dark:opacity-100">From AC installation to wiring, fan repair to water purifier servicing — we deliver trusted, affordable, and on-time solutions for your home and office.</p>

					<p className="text-lg px-12 py-2 text-amber-500 font-extrabold  
  text-center cursor-pointer border-2 border-amber-500 hover:bg-amber-500 hover:text-white dark:hover:text-black transition duration-200 select-none  hover:shadow-2xl w-full" >Book a service</p>

				</div>

			</div>





			<footer className=" px-8 py-4 text-center text-purple-900 dark:text-slate-300 text-xs font-mono">

				<div className="justify-items-center ">
					&copy; 2025 LocalService. All rights reserved. Developed by TechMess
				</div>

			</footer>


		</div>
	);
}
