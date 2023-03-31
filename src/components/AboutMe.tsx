import React from "react";
import { languageStore } from "../store/languageStore";
import { useStore } from "@nanostores/react";

const AboutMe = () => {
	const language = useStore(languageStore);

	return (
		<section className="h-[100vh] w-[80%] m-auto flex flex-col justify-center" id="aboutMe">
			<h2 className="text-white mb-10 font-bold text-2xl">
				{language === "ES" ? "Sobre Mi" : "About Me"}
			</h2>
			{language === "ES" ? (
				<p className="about-me">
					Desarrollador front-end egresado de Misión TIC 2022 y Academia Geek con énfasis en
					ReactJs, con conocimientos fuertes de HTML, CSS, JavaScript, Git y Github, y
					frameworks de CSS como Bootstrap y MaterialUI. Alta adaptabilidad a trabajo en equipo
					con buena capacidad de empatía y compromiso por cada trabajo al que me dedique
					aportando a un buen ambiente de trabajo y a una buena cohesión entre el equipo.
					<br />
					Amante de todo tipo de música, de tocar guitarra, de salir de picnic con mis amigos y
					seres queridos, y por sobre todo amante de aprender y de aportar lo mejor de mí para
					mi crecimiento personal y de mi entorno laboral.
				</p>
			) : (
				<p className="about-me">
					Front-end developer graduated from Misión TIC 2022 and Academia Geek with emphasis on
					ReactJs, with strong knowledge of HTML, CSS, JavaScript, Git and Github, and CSS
					frameworks such as Bootstrap and MaterialUI. High adaptability to teamwork with good
					empathy and commitment to each job I dedicate myself to contributing to a good
					working environment and good cohesion between the team.
					<br /> I love all kinds of music, playing guitar, going on picnics with my friends
					and loved ones, and above all I love to learn and contribute the best of me for my
					personal growth and my work environment.
				</p>
			)}
		</section>
	);
};

export default AboutMe;
