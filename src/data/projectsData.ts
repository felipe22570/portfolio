import { icons } from "./iconsLinks";

const base_url = import.meta.env.CLOUDINARY_BASE_URL;

const projectsData = [
	{
		title: "MentalApp",
		image: `${base_url}/v1675565829/portfolio_icons/Captura_de_pantalla_2023-02-04_215643_jqjgot.png`,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam quod debitis commodi voluptatibus, quam harum quo nobis assumenda laborum.",
		codeLink: "https://github.com/academia-geek/demo-day-projects-mentalapp",
		deployLink: "https://mentalapp-ag.netlify.app/",
		stack: [icons.react, icons.redux, icons.materialui, icons.firebase],
	},
	{
		title: "GuitarLa",
		image: `${base_url}/v1675562488/portfolio_icons/Captura_de_pantalla_2023-02-04_183547_mjrqiv.png`,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam quod debitis commodi voluptatibus, quam harum quo nobis assumenda laborum.",
		codeLink: "https://github.com/felipe22570/guitarla-next",
		deployLink: "https://guitarla-next-six-delta.vercel.app/",
		stack: [icons.react, icons.nextjs, icons.postgresql],
	},
	{
		title: "MyRecipes",
		image: `${base_url}/v1675567826/portfolio_icons/Captura_de_pantalla_2023-02-04_223004_zab3ya.png`,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam quod debitis commodi voluptatibus, quam harum quo nobis assumenda laborum.",
		codeLink: "https://github.com/felipe22570/myrecipes",
		deployLink: "https://myrecipes-felipe22570.vercel.app/",
		stack: [icons.react, icons.nextjs, icons.tailwind, icons.trpc],
	},
	{
		title: "UpTask",
		image: `${base_url}/v1675567899/portfolio_icons/Captura_de_pantalla_2023-02-04_223119_obb9dx.png`,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam quod debitis commodi voluptatibus, quam harum quo nobis assumenda laborum.",
		codeLink: "https://github.com/felipe22570/uptask_frontend",
		deployLink: "https://uptask-felipe22570.vercel.app/",
		stack: [icons.react, icons.tailwind, icons.express, icons.mongodb],
	},
];

export default projectsData;
