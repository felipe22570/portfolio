import React from "react";
import TechnologyCard from "./TechnologyCard";
import technologiesData from "../data/technologiesData";
import { useStore } from "@nanostores/react";
import { languageStore } from "../store/languageStore";

const Technologies = () => {
	const language = useStore(languageStore);

	return (
		<section className="h-auto w-[80%] mx-auto py-16 bg-black-pearl-900 " id="technologies">
			<div className="w-full flex flex-col items-center gap-14">
				<h2 className="text-white text-3xl font-bold ">
					{language === "ES" ? "Tecnologías" : "Technologies"}
				</h2>
				<div className="flex flex-col gap-16 md:flex-row md:gap-4 lg:gap-12 w-full justify-between ">
					{technologiesData.map((tech) => (
						<TechnologyCard key={tech.name} data={tech.iconList} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Technologies;
