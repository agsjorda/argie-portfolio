import { Inter } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div
			className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
		  scroll-smooth scroll-py-44 overflow-scroll z-0 transition-all delay-1500"
		>
			{/* Header */}
			<Head>
				<title>Arthur&apos;s Portfolio</title>
			</Head>

			<Header />
			<section
				id="hero"
				className="snap-start snap-normal scroll-smooth duration-1000 ease-in-out"
			>
				<Hero />
			</section>
			<section
				id="about"
				className="snap-center snap-normal scroll-smooth duration-1000 ease-in-out"
			>
				<About />
			</section>
			<section
				id="experience"
				className="snap-center snap-normal scroll-smooth duration-1000 ease-in-out"
			>
				<WorkExperience />
			</section>
			{/* Skills */}
			{/* Projects */}
			{/* Contact Me */}
		</div>
	);
}
