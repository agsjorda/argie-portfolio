import Image from "next/image";
import { images } from "@/constants";
import { motion } from "framer-motion";
import React from "react";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
	id: string;
	experience: Experience;
};

const ExperienceCard = ({ id, experience }: Props) => {
	return (
		<article
			id={id}
			className="flex flex-col rounded-lg justify-start items-center space-y-7 flex-shrink-0
		w-[100%]  snap-center bg-[#292929] opacity-40 
		hover:opacity-100 cursor-pointer overflow-hidden transition-opacity duration-200 p-10"
		>
			<motion.div
				transition={{ duration: 1.2 }}
				whileInView={{ y: [-100, 0], opacity: [0, 0.2, 1] }}
				viewport={{ once: true }}
			>
				<Image
					src={urlFor(experience?.companyImage).url()}
					width={500}
					height={500}
					alt=""
					className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full md:rounded-lg xl:w-[200px] xl:h-[200px]
				object-contain object-center"
				/>
			</motion.div>

			<div className="px-0 md:px-10">
				<h4 className="sm:text-4xl font-light">{experience?.jobTitle}</h4>
				<p className="font-bold sm:text-2xl mt-1">{experience?.company}</p>
				<div className="flex space-x-2 my-2">
					{experience.technologies.map((tech) => (
						<Image
							key={tech?._id}
							src={urlFor(tech.image).url()}
							width={500}
							height={500}
							alt=""
							className="h-10 w-10 rounded-full"
						/>
					))}
				</div>
				<p className="uppercase py-5 text-gray-300">
					{new Date(experience.dateStarted).toLocaleDateString(undefined, {
						year: "numeric",
						month: "long",
					})}{" "}
					-{" "}
					{experience.isCurrentlyWorkingHere
						? "Present"
						: new Date(experience.dateEnded).toLocaleDateString(undefined, {
								year: "numeric",
								month: "long",
						  })}
				</p>
				<ul className="list-disc space-y-4 ml-5 sm:text-lg">
					{experience.points?.map((point, i) => (
						<li key={i}>{point}</li>
					))}
				</ul>
			</div>
		</article>
	);
};

export default ExperienceCard;
