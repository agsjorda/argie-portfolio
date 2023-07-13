import Image from "next/image";
import { images } from "@/constants";
import { motion } from "framer-motion";
import React from "react";

type Props = {
	id: string;
};

const ExperienceCard = ({ id }: Props) => {
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
					src={images.profile}
					alt=""
					className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full md:rounded-lg xl:w-[200px] xl:h-[200px]
				object-cover object-center"
				/>
			</motion.div>

			<div className="px-0 md:px-10">
				<h4 className="sm:text-4xl font-light">CEO Jics Internet Cafe</h4>
				<p className="font-bold sm:text-2xl mt-1">JICS Internet Cafe</p>
				<div className="flex space-x-2 my-2">
					<Image src={images.html} alt="" className="h-10 w-10 rounded-full" />
					<Image src={images.html} alt="" className="h-10 w-10 rounded-full" />
					<Image src={images.html} alt="" className="h-10 w-10 rounded-full" />
				</div>
				<p className="uppercase py-5 text-gray-300">Started ... - Ended ...</p>
				<ul className="list-disc space-y-4 ml-5 sm:text-lg">
					<li>summary duties</li>
					<li>summary duties</li>
					<li>summary duties</li>
					<li>summary duties</li>
					<li>summary duties</li>
				</ul>
			</div>
		</article>
	);
};

export default ExperienceCard;
