import { useStore } from "@nanostores/react";
import { languageStore } from "../store/languageStore";

const Main = () => {
	const language = useStore(languageStore);
	return (
		<main
			className="h-[90vh] flex justify-center flex-col w-[80%] m-auto gap-7 bg-black-pearl-900 text-white"
			id="main"
		>
			<h1 className="text-5xl font-bold ">{language === "ES" ? "Hola! Soy" : "Hi! I'm"}</h1>
			<h1 className="text-5xl font-extrabold text-black-pearl-500">Felipe Rodriguez</h1>
			<span className="text-3xl">Full-stack developer!</span>
		</main>
	);
};

export default Main;
