import { Experience } from "@/typings";

export const fetchExperience = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getExperience`
	);

	const data = await res.json();
	const experience: Experience[] = data.experiences;

	console.log("fetching", experience);

	return experience;
};
