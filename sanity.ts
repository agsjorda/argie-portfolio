import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
	apiVersion: "2022-02-01",
	useCdn: true,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: any) => builder.image(source);
