import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { images } from "../constants";
import Image from "next/image";

import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
	const [text, count] = useTypewriter({
		words: [
			"Hi! The Name's Arthur",
			"A-Hooman-who-loves-coffee",
			"<AndPaintWithCode/>",
		],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<div className="relative h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
			<BackgroundCircles />
			<Image
				className=" rounded-full h-32 w-32 mx-auto object-cover m-0"
				src={images.profile2}
				alt="Picture of the author"
				// width={500} automatically provided
				// height={500} automatically provided
				// blurDataURL="data:..." automatically provided
				// placeholder="blur" // Optional blur-up while loading
			/>
			<div className=" z-20">
				<h2 className="text-[10px] sm:text-sm uppercase text-gray-500 pb-2 tracking-[10px] sm:tracking-[15px]">
					Software Engineer
				</h2>

				<h1 className="text-[1.3rem] sm:text-4xl lg:text-6xl font-semibold px-10">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="#f7ab0a" />
				</h1>
				<div className="pt-5">
					<Link href="#about">
						<button className="heroButton">About</button>
					</Link>
					<Link href="#experience">
						<button className="heroButton">Experience</button>
					</Link>
					<Link href="#skills">
						<button className="heroButton">Skills</button>
					</Link>
					<Link href="#projects">
						<button className="heroButton">Projects</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
