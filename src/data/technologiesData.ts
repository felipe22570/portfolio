import { icons } from "./iconsLinks";

const known = [
	{
		icon: icons.html,
		name: "HTML",
	},
	{
		icon: icons.css,
		name: "CSS",
	},
	{
		icon: icons.javascript,
		name: "Javascript",
	},
	{
		icon: icons.react,
		name: "React",
	},
	{
		icon: icons.vue,
		name: "Vue",
	},
	{
		icon: icons.redux,
		name: "Redux",
	},
	{
		icon: icons.typescript,
		name: "Typescript",
	},
	{
		icon: icons.tailwind,
		name: "Tailwind",
	},
	{
		icon: icons.git,
		name: "Git",
	},
];

const learning = [
	{
		icon: icons.nodejs,
		name: "NodeJS",
	},
	{
		icon: icons.express,
		name: "Express",
	},
	{
		icon: icons.nestjs,
		name: "NestJS",
	},
	{
		icon: icons.sql,
		name: "SQL",
	},
	{
		icon: icons.mongodb,
		name: "MongoDB",
	},
	{
		icon: icons.firebase,
		name: "Firebase",
	},
	{
		icon: icons.nextjs,
		name: "NextJS",
	},
	{
		icon: icons.jest,
		name: "Jest",
	},
];

const pending = [
	{
		icon: icons.docker,
		name: "Docker",
	},
	{
		icon: icons.ci_cd,
		name: "CI/CD",
	},
	{
		icon: icons.postgresql,
		name: "PostgreSQL",
	},
	{
		icon: icons.trpc,
		name: "tRPC",
	},
	{
		icon: icons.graphql,
		name: "GraphQL",
	},
	{
		icon: icons.aws,
		name: "Amazon Web Services",
	},
];

const technologiesData = [
	{
		name: "Known",
		iconList: known,
	},
	{
		name: "Learning",
		iconList: learning,
	},
	{
		name: "Pending",
		iconList: pending,
	},
];

export default technologiesData;
