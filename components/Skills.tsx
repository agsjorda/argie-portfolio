import React from "react";

type Props = {};

const Skills = (props: Props) => {
	return (
		<div
			className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row
		max-w-full px-10 justify-center items-center mx-auto"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Skills
			</h3>
		</div>
	);
};

export default Skills;