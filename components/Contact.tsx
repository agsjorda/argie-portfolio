import React from "react";

type Props = {};

const Contact = (props: Props) => {
	return (
		<div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Contact Me
			</h3>
			<div>
				<h4 className="text-4xl font-semibold text-center">
					I&apos;ve Got what you need.{" "}
					<span className="underline decoration-[#f7ab0a]/50">Lets Talk</span>
				</h4>
			</div>
		</div>
	);
};

export default Contact;
