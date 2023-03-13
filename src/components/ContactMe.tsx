import React from "react";
import { useStore } from "@nanostores/react";
import { languageStore } from "../store/languageStore";

const ContactMe = () => {
	const language = useStore(languageStore);
	return (
		<section
			className="h-[100vh] w-[80%] mx-auto flex flex-col gap-12 items-center py-20"
			id="contactMe"
		>
			<h2 className="text-white mb-10 font-bold text-2xl">
				{language === "ES" ? "Contáctame" : "Contact me"}
			</h2>
		</section>
	);
};

export default ContactMe;
