import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";
import { researchStreamSlugs } from "./data/researchStreams";

const people = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/people" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    category: z.enum([
      "pi",
      "research_scientist",
      "postdoc",
      "phd",
      "masters",
      "undergrad",
      "alumni",
    ]),
    pills: z.array(z.enum(researchStreamSlugs)).min(1).max(3).optional(),
    photo: z.string().optional(),
    links: z
      .object({
        website: z.string().url().optional(),
        scholarUrl: z.string().url().optional(),
      })
      .optional(),
    sourceUrl: z.string().optional(),
    placeholder: z.boolean().default(false),
  }),
});

const publications = defineCollection({
  loader: file("./src/data/publications.yaml"),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.number(),
    url: z.string().optional(),
    sourceUrl: z.string(),
  }),
});

const news = defineCollection({
  loader: file("./src/data/news.yaml"),
  schema: z.object({
    date: z.string(),
    title: z.string(),
    summary: z.string(),
    url: z.string().optional(),
    sourceUrl: z.string(),
  }),
});

export const collections = { people, publications, news };
