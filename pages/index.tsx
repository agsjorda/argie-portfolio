import Head from "next/head";
import Header from "../components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Link from "next/link";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { GetStaticProps } from "next";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperience } from "@/utils/fetchExperiences";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchProject } from "@/utils/fetchProjects";
import { fetchSocial } from "@/utils/fetchSocials";

type Props = {
	pageInfo: PageInfo;
	experiences: Experience[];
	skills: Skill[];
	projects: Project[];
	socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
	return (
		<div
			className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
		  scroll-smooth  overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80"
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
			<section id="projects" className="snap-start snap-always ">
				<Projects />
			</section>
			<section id="contact" className="snap-start snap-always ">
				<Contact />
			</section>
			<Link href="#hero">
				<footer className="sticky bottom-5 w-full cursor-pointer">
					<div
						className="flex justify-center items-center
"
					>
						<ChevronUpIcon className=" h-6 w-6 animate-pulse" />
					</div>
				</footer>
			</Link>
		</div>
	);
};
export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
	const pageInfo: PageInfo = await fetchPageInfo();
	const experiences: Experience[] = await fetchExperience();
	const skills: Skill[] = await fetchSkills();
	const projects: Project[] = await fetchProject();
	const socials: Social[] = await fetchSocial();

	return {
		props: {
			pageInfo,
			experiences,
			skills,
			projects,
			socials,
		},
	};
};
