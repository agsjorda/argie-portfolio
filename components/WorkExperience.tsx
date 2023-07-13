import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import ExperienceCard from "./ExperienceCard";
import Link from "next/link";

type Props = {};

const WorkExperience = (props: Props) => {
	const [count, setCount] = useState(1);

	const handleClickLeft = () => {
		if (count === 1) {
			return;
		}

		setCount((current) => current - 1);
		console.log(count);
	};

	const handleClickRight = () => {
		if (count === 3) {
			return;
		}

		setCount((current) => current + 1);
		console.log(count);
	};

	return (
		<motion.div
			initial={{
				x: -200,
			}}
			transition={{ duration: 1.2 }}
			whileInView={{ x: 0, opacity: [0, 0.2, 1] }}
			className="h-screen flex relative  flex-col text-left md:flex-row
		max-w-full px-10 justify-center items-center mx-auto"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Experience
			</h3>
			<div
				id="cards"
				className="w-full h-[70%] flex space-x-5 overflow-x-scroll overflow-hidden p-10 scroll-smooth snap-x snap-mandatory scrollbar-thin  scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80"
			>
				<ExperienceCard id="id1" />
				<ExperienceCard id="id2" />
				<ExperienceCard id="id3" />
			</div>
			<div className="absolute top-[50%] sm:flex w-[100%] justify-around hidden">
				<Link href={`#id${count - 1}`}>
					<button onClick={() => handleClickLeft()}>
						<FaLessThan className="w-6 h-6 text-gray-300" />
					</button>
				</Link>
				<Link href={`#id${count + 1}`}>
					<button onClick={() => handleClickRight()}>
						<FaGreaterThan className="w-6 h-6 text-gray-300" />
					</button>
				</Link>
			</div>
		</motion.div>
	);
};

export default WorkExperience;
