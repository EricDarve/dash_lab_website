// Canonical list of research-stream "pills" used on people entries.
// Kept intentionally short and broad (durable areas, not one-off project
// names) so it doesn't need edits as individual projects come and go —
// per Eric's ask that the site stay low-maintenance.
//
// Seeded from the three existing lab-wide research areas (researchAreas.ts,
// sourced from icme.stanford.edu/people/eric-darve) plus three additional
// streams Kirill named from current lab activity. This is a draft: confirm
// with Eric before treating it as final.
//
// To add a stream: append below, then reference its slug from a person's
// frontmatter. Don't add a stream for a single project — only for a
// direction multiple people's work could plausibly sit under.
export const researchStreams = [
  {
    // Kept deliberately short: the long form ("Machine Learning for
    // Science & Engineering") made the pill too wide on person cards.
    slug: "ml-science-engineering",
    label: "SciML",
  },
  {
    slug: "numerical-methods-hpc",
    label: "Numerical Methods & HPC",
  },
  {
    // Abbreviated for pill width, same as SciML above. The full name
    // still appears as the research-area title on the homepage.
    slug: "uncertainty-anomaly-detection",
    label: "UQ & AD",
  },
  {
    slug: "interpretability",
    label: "Interpretability",
  },
  {
    slug: "ai-for-science",
    label: "AI for Science",
  },
  {
    slug: "agentic-ai",
    label: "Agentic AI",
  },
  {
    slug: "computational-imaging",
    label: "Computational Imaging",
  },
] as const;

export const researchStreamSlugs = researchStreams.map((s) => s.slug) as [
  string,
  ...string[],
];

export const researchStreamLabel = (slug: string): string =>
  researchStreams.find((s) => s.slug === slug)?.label ?? slug;
