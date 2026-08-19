// "AI interpretability & reliability" reflects a current lab research direction,
// confirmed directly by the lab. The remaining areas are paraphrased from Eric
// Darve's official Stanford research-interests statement.
// Source: https://icme.stanford.edu/people/eric-darve
//
// `slug` is this area's own page id (src/pages/research/[slug].astro).
// `pills` lists the matching entries in src/data/researchStreams.ts (the same
// tags used on people's profiles) — an area can span more than one pill, and
// every pill in the list is used to find people who work in this area.
export const researchAreas = [
  {
    title: "AI Interpretability & Safety",
    description:
      "Methods for understanding model representations, diagnosing failure modes, and making advanced AI systems more trustworthy.",
    sourceUrl: "https://icme.stanford.edu/people/eric-darve",
    slug: "interpretability",
    pills: ["interpretability", "ai-safety"],
  },
  {
    title: "Scientific Machine Learning",
    description:
      "Learning surrogate and foundation models that accelerate simulation, design, and scientific discovery.",
    sourceUrl: "https://icme.stanford.edu/people/eric-darve",
    slug: "ai-for-science",
    pills: ["ai-for-science", "ml-science-engineering"],
  },
  {
    title: "Numerical Algorithms & High-Performance Computing",
    description:
      "Fast numerical linear algebra, parallel algorithms, and GPU implementations for large-scale scientific computing.",
    sourceUrl: "https://icme.stanford.edu/people/eric-darve",
    slug: "numerical-methods-hpc",
    pills: ["numerical-methods-hpc"],
  },
  {
    title: "Uncertainty Quantification & Anomaly Detection",
    description:
      "Probabilistic methods for solving inverse problems, quantifying uncertainty, and detecting failures in complex systems.",
    sourceUrl: "https://icme.stanford.edu/people/eric-darve",
    slug: "uncertainty-anomaly-detection",
    pills: ["uncertainty-anomaly-detection"],
  },
];
