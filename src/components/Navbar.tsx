import React, { useState } from "react";
import { languageStore } from "../store/languageStore";
import { useStore } from "@nanostores/react";
import Select from "./Select";

const Links = [
	{ nameEN: "About Me", nameES: "Sobre Mi", link: "#aboutMe" },
	{ nameEN: "Technologies", nameES: "Tecnologías", link: "#technologies" },
	{ nameEN: "Projects", nameES: "Proyectos", link: "#projects" },
	{ nameEN: "Contact Me", nameES: "Contáctame", link: "#contactMe" },
];

const Navbar = () => {
	const language = useStore(languageStore);
	const [open, setOpen] = useState(false);

	return (
		<div className=" bg-black-pearl-900 shadow-md w-full fixed top-0 left-0">
			<div className="md:flex items-center justify-between py-4 md:px-10 px-7">
				<div className="font-bold text-2xl cursor-pointer text-white flex items-center">
					<a href="/">Felipe Rodriguez</a>
				</div>

				<div
					onClick={() => setOpen(!open)}
					className="text-md absolute right-8 top-6 cursor-pointer md:hidden"
				>
					{!open ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-7 h-7 text-white"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-7 h-7 text-white"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					)}
				</div>

				<ul
					className={`bg-white md:flex md:items-center md:pb-0 py-16 md:py-0 absolute md:static md:bg-transparent md:text-white text-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
						open ? "top-20" : "top-[-490px]"
					}`}
				>
					{Links.map((link) => (
						<li key={link.nameEN} className="md:ml-8 text-base md:my-0 my-7">
							<a href={link.link} className=" hover:text-gray-400 duration-500">
								{language === "ES" ? link.nameES : link.nameEN}
							</a>
						</li>
					))}
					<li className="md:ml-8 text-base md:my-0 my-7">
						{/* <select
							value={language}
							onChange={(e) => languageStore.set(e.target.value)}
							className="bg-transparent md:text-white"
						>
							<option value="ES" className="text-black flex">
								ES
							</option>
							<option value="EN" className="text-black flex">
								EN
							</option>
						</select> */}
						<Select />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
