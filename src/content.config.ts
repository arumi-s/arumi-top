import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			github: z.string().url().optional(),
			website: z.string().url().optional(),
			tags: z.array(z.string()).optional(),
			featured: z.boolean().default(false),
			pubDate: z.date().optional(),
			updatedDate: z.date().optional(),
			image: z.string().optional(),
		}),
});

const packs = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/packs" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		repository: z.string().url().optional(),
		reference: z.string().url().optional(),
		tags: z.array(z.string()).optional(),
		pubDate: z.date().optional(),
		updatedDate: z.date().optional(),
	}),
});

const blogs = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/blogs" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.date(),
			updatedDate: z.date().optional(),
			tags: z.array(z.string()).optional(),
			image: image().optional(),
			draft: z.boolean().default(false),
		}),
});

export const collections = {
	projects,
	packs,
	blogs,
};
