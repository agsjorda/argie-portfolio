import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				scale: [1, 2, 2, 3, 1],
				opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
				rotate: [120, 0],
				borderRadius: ["20%", "30%", "50%", "80%", "20%"],
			}}
			transition={{ duration: 2.5 }}
			className="relative flex justify-center items-center overflow-visible"
		>
			<div className="absolute border border-[#333333] rounded-full h-[100px] w-[100px] sm:h-[200px] sm:w-[200px] mt-52 animate-ping" />
			<div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] mt-52 " />
			<div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] mt-52 " />
			<div className="absolute border border-[#f7ab0a] rounded-full  h-[400px] w-[400px] sm:h-[650px] sm:w-[650px] opacity-20 mt-52 animate-pulse " />
			<div className="absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52 animate-ping" />
			<div />
		</motion.div>
	);
};

export default BackgroundCircles;
