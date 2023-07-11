import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

type Props = {};

const Hero = (props: Props) => {
	const [text, count] = useTypewriter({
		words: [
			"Hi! The Name's Arthur",
			"A-Hooman-who-loves-coffee",
			"AndPaintWithCode",
		],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<div>
			<h1>
				<span>{text}</span>
				<Cursor cursorColor="#f7ab0a" />
			</h1>
		</div>
	);
};

export default Hero;
