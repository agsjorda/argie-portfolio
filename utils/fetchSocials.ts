import { Social } from "@/typings";

export const fetchSocial = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getSocials`
	);

	const data = await res.json();
	const socials: Social[] = data.socials;

	console.log("socials", socials);

	return socials;
};
