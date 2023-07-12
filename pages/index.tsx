import { Inter } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div
			className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
		  scroll-smooth  overflow-scroll z-0 "
		>
			{/* Header */}
			<Head>
				<title>Arthur&apos;s Portfolio</title>
			</Head>

			<Header />
			<section id="hero" className="snap-start snap-always mt-10">
				<Hero />
			</section>
			<section id="about" className="snap-start snap-always ">
				<About />
			</section>
			<section id="experience" className="snap-start snap-always ">
				<WorkExperience />
			</section>
			<section id="skills" className="snap-start snap-always ">
				<Skills />
			</section>
			{/* Skills */}
			{/* Projects */}
			{/* Contact Me */}
		</div>
	);
}
