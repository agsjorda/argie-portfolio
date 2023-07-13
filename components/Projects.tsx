import { images } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

const Projects = (props: Props) => {
	const projects = [1, 2, 3, 4, 5];
	return (
		<motion.div
			whileInView={{ opacity: [0, 1] }}
			transition={{ duration: 2 }}
			className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-screen justify-evenly mx-auto items-center z-0"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Projects
			</h3>
			<div className="relative w-full flex overflow-x-scroll  overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 ">
				{/*  */}
				{projects.map((project, index) => (
					<div
						key={`${project}${index}`}
						className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
					>
						<motion.div
							initial={{
								y: -300,
							}}
							transition={{ duration: 1.2 }}
							whileInView={{ y: 0, opacity: [0, 0.2, 1] }}
							viewport={{ once: true }}
						>
							<Image src={images.mobile} alt="" />
						</motion.div>
						<div className="space-y-10 px-0 md:px-10 max-w-6xl">
							<h4 className="text-4xl font-semibold text-center">
								<span className="underline decoration-[#f7ab0a]/50">
									Case Study of {index + 1} of {projects.length}
								</span>{" "}
								shalala
							</h4>
							<p className="text-lg text-center md:text-left">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
								necessitatibus soluta similique magnam in minus laboriosam dolor
								vero placeat quia suscipit distinctio error et saepe, doloremque
								tempore sunt sequi ab?
							</p>
						</div>
					</div>
				))}
			</div>
			<div className="w-full h-[500px] absolute bg-[#f7ab0a]/10 top-[30%] left-0 -skew-y-12" />
		</motion.div>
	);
};

export default Projects;
