import React from "react";
import { motion } from "framer-motion";
import { images } from "@/constants";
import Image from "next/image";

type Props = {
	directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
	return (
		<div className="group relative flex cursor-pointer">
			<motion.div
				initial={{
					x: directionLeft ? -200 : 200,
					opacity: 0,
				}}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1, x: 0 }}
			>
				<Image
					src={images.css}
					alt="images"
					className="rounded-full border boder-gray-500 object-cover w-24 h-24 md:w-28  md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
				/>
			</motion.div>
			<div
				className="absolute opacity-0 group-hover:opacity-80 group-hover:bg-white 
			transition duration-300 ease-in-out w-24 h-24 md:w-28  md:h-28 xl:w-32 xl:h-32 
			rounded-full z-0"
			>
				<div className=" flex items-center justify-center h-full">
					<p className="text-3xl font-bold text-black opacity-100">100%</p>
				</div>
			</div>
		</div>
	);
};

export default Skill;
