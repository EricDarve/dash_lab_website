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
    // "YYYY-MM-DD", or "YYYY-MM" when only the month is known. Kept as a
    // string so entries sort newest-first with a plain string compare.
    date: z
      .string()
      .regex(/^\d{4}-\d{2}(-\d{2})?$/, 'date must be "YYYY-MM-DD" or "YYYY-MM"'),
    title: z.string(),
    summary: z.string(),
    url: z.string().url().optional(),
    // Where the claim can be verified. Only omitted for items Eric supplied
    // directly that have no public page (note the provenance in a comment).
    sourceUrl: z.string().url().optional(),
  }),
});

export const collections = { people, publications, news };
