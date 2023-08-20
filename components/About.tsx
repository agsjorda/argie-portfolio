import React from "react";
import { motion } from "framer-motion";
import { images } from "../constants";
import Image from "next/image";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
	pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
	return (
		<div
			className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10
		justify-evenly items-center mx-auto"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				About
			</h3>
			<motion.div
				initial={{
					x: -200,
				}}
				transition={{ duration: 1.2 }}
				whileInView={{ x: 0, opacity: [0, 0.2, 1] }}
			>
				<Image
					src={urlFor(pageInfo?.profilePic).url()}
					width={500}
					height={500}
					alt="image profile"
					className=" mt-16 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
					md:rounded-lg md:w-96 md:h-64 xl:w-[400px] xl:h-[400px]"
				/>
			</motion.div>
			<div className="space-y-6 px-0 md:px-10">
				<h4 className="text-4xl font-semibold">
					Here is a{" "}
					<span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
					background
				</h4>
				<p className="text-base">{pageInfo?.backgroundInformation}</p>
			</div>
		</div>
	);
};

export default About;
