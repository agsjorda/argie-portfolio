import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "@/typings";

type Props = {
	socials: Social[];
};

const Header = ({ socials }: Props) => {
	return (
		<header className="backdrop-opacity-5 bg-transparent sticky top-0 p-5 flex justify-between w-screen mx-auto max-w-7xl z-20 xl:items-center overflow-visible">
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
				{socials.map((social) => (
					<SocialIcon
						key={social._id}
						url={social.url}
						fgColor="gray"
						bgColor="transparent"
					/>
				))}
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
					<a href="#contact">Get in Touch</a>
				</p>
			</motion.div>
		</header>
	);
};

export default Header;
