import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
	return (
		<header className="sticky top-0 p-5 flex justify-between w-screen mx-auto max-w-7xl z-20 xl:items-center">
			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				// whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 1, ease: "easeInOut" }}
				className="text-red-600 font-bold flex flex-row justify-start items-center"
			>
				{/* Social Icons */}
				<SocialIcon
					url="https://www.facebook.com/akintofesbook/"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://www.facebook.com/akintofesbook/"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://www.facebook.com/akintofesbook/"
					fgColor="gray"
					bgColor="transparent"
				/>
				<h1 className="font-extrabold">Hello</h1>
			</motion.div>
			<motion.div
				initial={{
					x: 500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				// whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 1, ease: "easeInOut" }}
				className="flex flex-row items-center text-gray-300 cursor-pointer"
			>
				<SocialIcon
					className="cursor-pointer"
					network="email"
					fgColor="gray"
					bgColor="transparent"
				/>
				<p className="uppercase hidden md:inline-flex text-sm text-gray-400">
					Get in Touch
				</p>
			</motion.div>
		</header>
	);
};

export default Header;
