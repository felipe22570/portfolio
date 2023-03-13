import React from "react";
import { useStore } from "@nanostores/react";
import { languageStore } from "../store/languageStore";

const ProjectCard = ({ data }: { data: IProject }) => {
	const language = useStore(languageStore);

	return (
		<div className="w-full bg-cover rounded-lg">
			<img src={data.image} alt="" className="bg-cover" />
			<div className="bg-white flex flex-col gap-3 px-5 py-7">
				<h3 className="font-extrabold text-xl">{data.title}</h3>
				<p className="text-sm text-fluid text-gray-500">{data.description}</p>
				<div className="flex flex-col lg:flex-row  gap-5 lg:justify-between mt-5 lg:items-center justify-start items-start">
					<div className="flex gap-3 items-center">
						<span className="font-bold">Stack: </span>
						<div className="flex gap-2 bg-cover">
							{data.stack.map((icon) => (
								<div key={icon} className="w-8 bg-cover flex items-center">
									<img src={icon} alt="" className="w-full" />
								</div>
							))}
						</div>
					</div>
					<div className="flex gap-3 text-sm">
						<a
							className="bg-black-pearl-500 px-3 py-2 text-white font-bold"
							target="_blank"
							href={data.deployLink}
						>
							{language === "ES" ? "Ver página" : "View page"}
						</a>
						<a
							className="bg-black-pearl-500 px-3 py-2 text-white font-bold"
							target="_blank"
							href={data.codeLink}
						>
							{language === "ES" ? "Ver código" : "View code"}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
