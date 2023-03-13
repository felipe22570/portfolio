import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projectsData";
import { useStore } from "@nanostores/react";
import { languageStore } from "../store/languageStore";

const Projects = () => {
	const language = useStore(languageStore);

	return (
		<div className="h-auto w-[80%] mx-auto flex flex-col gap-12 items-center py-20" id="projects">
			<h2 className="text-white text-3xl font-bold">
				{language === "ES" ? "Proyectos" : "Projects"}
			</h2>
			<div className="grid md:grid-cols-2 gap-10">
				{projectsData.map((project) => (
					<ProjectCard data={project} />
				))}
			</div>
		</div>
	);
};

export default Projects;
