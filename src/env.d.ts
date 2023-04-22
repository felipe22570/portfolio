/// <reference types="astro/client" />

interface ITechnology {
	icon: string;
	name: string;
}

interface IProject {
	title: string;
	image: string;
	description: string;
	codeLink: string;
	deployLink: string;
	stack: string[];
}

interface ILanguageData {
	name: string;
	value: string;
	icon: string;
}
