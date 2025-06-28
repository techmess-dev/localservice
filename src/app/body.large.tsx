export default function HomePageBodyLarge() {
	return (
		<div className="flex-grow grid sm:grid-cols-12 px-8 gap-8 items-center font-sans "  >

			<div className="grid sm:col-span-7 h-full items-center">

				<div className="grid gap-6">

					<p className="font-extrabold text-7xl  drop-shadow-2xl text-purple-900 dark:text-purple-400" >Fast, Reliable Home Tech Services</p>

					<p className="font-extrabold text-2xl from-neutral-900  text-purple-900 dark:text-slate-500 opacity-65 dark:opacity-100">From AC installation to wiring, fan repair to water purifier servicing — we deliver trusted, affordable, and on-time solutions for your home and office.</p>

					<div className="flex">

						<p className=" px-12 py-2 text-lg  text-amber-500 font-extrabold  
text-center cursor-pointer border-2 border-amber-500 hover:bg-amber-500 hover:text-white dark:hover:text-black transition duration-200 select-none  hover:shadow-2xl" >Book a service</p>

						{/* <div className="flex flex-col text-xs px-8 text-purple-900 text-center cursor-pointer hover:text-white hover:bg-amber-500 dark:text-slate-300 dark:hover:text-black select-none items-center justify-center" >
    <p className="font-xs font-normal" >Call us at</p>
    <p className="font-sm font-semibold">+91-9854935115</p>
  </div> */}

					</div>
				</div>



			</div>



			<img src="./img/hero.svg" className="grid  sm:col-span-5 drop-shadow-xl brightness-110 order-first sm:order-none" />

		</div>
	);
}