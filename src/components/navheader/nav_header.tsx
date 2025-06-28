
"use client"

import { useEffect, useRef, useState } from 'react';

import { Menu, X } from "lucide-react";

type HeaderProps = {
	className?: string;
	header: string;
};

export default function NavHeader({ className, header }: HeaderProps) {

	const [menuOpen, setMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);



	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setMenuOpen(false);
			}
		}

		if (menuOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [menuOpen]);


	return (

		<div className='' >

			{menuOpen && (
				<div ref={menuRef} className="absolute w-full top-16 z-20 px-2">
					<div className="container mx-auto bg-white dark:bg-stone-900 shadow-md rounded-lg">
						<div className="flex justify-between items-center h-full px-4 py-4 pb-12">
							<div className="grid gap-2 md:gap-8 w-full font-bold">
								<p className=" cursor-pointer w-full py-4" >About</p>
								<p className=" cursor-pointer w-full py-4" >Features</p>
								<p className=" cursor-pointer w-full py-4" >Pricing</p>
								<p className=" cursor-pointer w-full py-4" >FAQ</p>
								<p className=" w-full  mt-8 px-6 py-2 text-black bg-white font-bold text-center cursor-pointer border-1 border-black select-none " onClick={() => console.log("login")}>Log in</p>
								<p className=" w-full  mt-2 px-6 py-2 text-white font-bold bg-orange-600 text-center cursor-pointer border-1 border-black select-none " >Sign up</p>
							</div>

						</div>
					</div>
				</div>
			)}

			<div className={className}>
				<div className="grid col-span-3">
					<p className="text-2xl md:text-4xl font-extrabold" >{header}</p>
				</div>

				<div className="col-span-6 h-full hidden sm:flex justify-center items-center">
					<div className="grid grid-cols-4 gap-2 md:gap-8 justify-items-center ">
						<p className=" cursor-pointer">Services</p>
						<p className=" cursor-pointer">Products</p>
						<p className=" cursor-pointer">About us</p>
						<p className=" cursor-pointer">FAQ</p>
					</div>
				</div>

				<div className="grid col-span-9 sm:col-span-3 justify-end  ">
					{/* <p className="min-w-28 text-xs px-6 py-2 text-white font-bold bg-orange-600 text-center cursor-pointer border-1 border-black select-none hidden sm:block " >Download</p> */}
					<div className='select-none hidden sm:block'>

						<div className=" grid grid-cols-5 w-full gap-0.5 select-none">
							{/* <p className="grid col-span-2 text-xs px-6 py-2 text-black bg-white font-normal text-center cursor-pointer border-1 border-black select-none " >Log in</p>
							<p className="grid col-span-3 text-xs px-6 py-2 text-white font-normal bg-purple-900 text-center cursor-pointer border-1 border-black select-none " >Sign up</p> */}

							<p className="grid col-span-2  px-6 py-2 text-amber-500  text-center cursor-pointer  transition duration-200 select-none " >Know More</p>

							<p className="grid col-span-3  px-6 py-2 text-amber-500  text-center cursor-pointer border-2 border-amber-500  hover:bg-amber-500 hover:text-white dark:hover:text-black transition duration-200 select-none  hover:shadow-2xl" >Book a service</p>
						</div>

					</div>

					<div className="sm:hidden">
						{menuOpen ? (
							<X className="w-6 h-6 cursor-pointer" onClick={() => setMenuOpen(false)} />
						) : (
							<Menu className="w-6 h-6 cursor-pointer" onClick={() => setMenuOpen(true)} />
						)}
					</div>
				</div>
			</div>

		</div>
	);

}