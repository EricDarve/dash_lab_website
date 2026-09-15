// Lab-wide research areas: rendered as the rows of the homepage Research
// section (#research) and as detail pages at /research/<slug>.
//
// The four current areas and their paragraphs were written by Eric Darve
// (supplied 2026-09-15) and are reproduced VERBATIM — do not paraphrase,
// shorten or "polish" them. Only the headings were put in Title Case for the
// UI, and each paragraph was split at sentence boundaries for readability.
// An area has one or more `sections`; a section's optional `heading` becomes
// a subheading on the detail page and its `paragraphs` render in order.
// `links` lists the exact phrases Eric asked to hyperlink; each must occur
// exactly once across that section's paragraphs (checked at build time by
// sectionParagraphs below).
//
// `slug` is the area's page id (src/pages/research/[slug].astro).
// `pills` lists the matching entries in src/data/researchStreams.ts (the same
// tags used on people's profiles) — an area can span more than one pill, and
// every pill in the list is used to find people who work in this area.
// `description` (the short homepage row text) is the first sentence of the
// first section, taken verbatim.

export interface ResearchLink {
  text: string;
  url: string;
}

export interface ResearchSection {
  heading?: string;
  // Eric's sentences, verbatim and in his order. Only the grouping into
  // paragraphs is editorial (split points agreed with Kirill, 2026-09-15).
  paragraphs: string[];
  links: ResearchLink[];
}

interface ResearchAreaInput {
  title: string;
  slug: string;
  sections: ResearchSection[];
  pills: string[];
}

export interface ResearchArea extends ResearchAreaInput {
  description: string;
}

const firstSentence = (text: string): string => {
  const end = text.indexOf(". ");
  return end === -1 ? text : text.slice(0, end + 1);
};

const withDescription = (area: ResearchAreaInput): ResearchArea => ({
  ...area,
  description: firstSentence(area.sections[0].paragraphs[0]),
});

const GENESIS_MISSION_ANNOUNCEMENT =
  "https://news.stanford.edu/stories/2026/07/stanford-and-slac-to-lead-genesis-mission-projects-that-tackle-the-nation-s-most-complex-science-and-technology-challenges";

export const researchAreas: ResearchArea[] = [
  {
    title: "Fast Algorithms for Data Processing at the Edge",
    slug: "edge-data-processing",
    sections: [
      {
        paragraphs: [
          "We develop algorithms that compress and analyze data close to where it is generated, including directly at scientific detectors. Working with SLAC, we address the large data volumes produced by the LCLS-II X-ray laser.",
          "Our work includes wavelet methods that separate diffraction signals from background and can run efficiently on specialized hardware. We aim to reduce storage and communication demands while preserving the information needed for scientific analysis, evaluating algorithms by both their computational cost and their effect on downstream results.",
        ],
        links: [{ text: "wavelet methods", url: "https://arxiv.org/abs/2605.19199" }],
      },
    ],
    pills: ["computational-imaging", "numerical-methods-hpc"],
  },
  {
    // Eric wrote these as two areas ("AI agents for complex scientific
    // simulations" and "AI agents for experimental data analysis"); they are
    // presented as one area with two subsections (merge requested by Kirill,
    // 2026-09-15). Both paragraphs are kept in full.
    title: "AI Agents for Science",
    slug: "ai-agents",
    sections: [
      {
        heading: "Complex Scientific Simulations",
        paragraphs: [
          "We build AI workflows that help researchers translate scientific questions into simulations, diagnose failures, and assess whether the results are physically and numerically sound. In collaboration with Lawrence Livermore National Laboratory and Stanford colleagues, we work with GEOS, a simulation platform for coupled subsurface flow and rock mechanics, with applications including geothermal energy and carbon storage.",
          "Our approach combines language models for planning with reproducible computational tools and independent checks of conservation laws, numerical convergence, and other physical constraints. A central question is when agents can proceed reliably and when expert judgment is needed.",
        ],
        links: [],
      },
      {
        heading: "Experimental Data Analysis",
        paragraphs: [
          "We develop scientific assistants that connect natural-language questions to large datasets, analysis tools, and published knowledge. Through ORACLE, our collaboration with SLAC, we are developing workflows for particle physics and the Deep Underground Neutrino Experiment (DUNE).",
          "These workflows will help researchers investigate unusual observations, test competing explanations, and distinguish detector or reconstruction problems from meaningful physics. Related work on SpectraQuery combines battery spectroscopy measurements with scientific literature. Across these projects, we seek answers that researchers can inspect and reproduce, with conclusions linked to the data, assumptions, and computations supporting them.",
        ],
        links: [
          { text: "ORACLE", url: GENESIS_MISSION_ANNOUNCEMENT },
          { text: "SpectraQuery", url: "https://arxiv.org/abs/2601.09036" },
        ],
      },
    ],
    pills: ["agentic-ai", "ai-for-science"],
  },
  {
    title: "Language-Model Interpretability and Alignment",
    slug: "interpretability",
    sections: [
      {
        paragraphs: [
          "We study how large language models represent knowledge and use it during computation. Through mechanistic interpretability, we examine the internal features and pathways that contribute to model behavior.",
          "Our work includes organizing learned features into maps of related concepts and testing how changes to internal representations affect subsequent reasoning.",
          "These studies help distinguish a change in the model’s answer from a change in the computation producing it. Our broader goal is to develop a stronger basis for evaluating and guiding model behavior toward reliable, intended outcomes.",
        ],
        links: [
          {
            text: "organizing learned features into maps of related concepts",
            url: "https://arxiv.org/abs/2604.23829",
          },
          {
            text: "testing how changes to internal representations affect subsequent reasoning",
            url: "https://arxiv.org/abs/2606.29522",
          },
        ],
      },
    ],
    pills: ["interpretability", "ai-safety"],
  },
  {
    title: "Scientific Machine Learning for Faster Simulation and Physical Insight",
    slug: "ai-for-science",
    sections: [
      {
        paragraphs: [
          "We combine physical models with machine learning to reduce computational cost and understand complex systems. In cardiovascular modeling, we develop fast approximations of patient-specific blood flow that retain a physical structure while learning corrections from detailed simulations.",
          "For expensive engineering studies, our active-learning methods select which simulations to run and at what level of accuracy to reduce uncertainty efficiently.",
          "We also develop interpretable representations and generative models that reveal distinct physical regimes in fluid and combustion data. Together, these methods support faster prediction, exploration of design choices, and analysis of physical behavior.",
        ],
        links: [
          {
            text: "fast approximations of patient-specific blood flow",
            url: "https://arxiv.org/abs/2604.01549",
          },
          { text: "active-learning methods", url: "https://arxiv.org/abs/2510.08865" },
          {
            text: "interpretable representations and generative models",
            url: "https://arxiv.org/abs/2511.21883",
          },
        ],
      },
    ],
    pills: ["ai-for-science", "ml-science-engineering"],
  },
].map(withDescription);

// Areas from the previous (pre-2026-09-15) taxonomy that have no counterpart
// among Eric's areas. They are no longer listed on the homepage, but their
// /research/<slug> pages still build so existing links keep working. Text is
// unchanged from before (paraphrased from Eric's Stanford research-interests
// statement, https://icme.stanford.edu/people/eric-darve).
export const legacyResearchAreas: ResearchArea[] = [
  {
    title: "Numerical Algorithms & High-Performance Computing",
    slug: "numerical-methods-hpc",
    sections: [
      {
        paragraphs: [
          "Fast numerical linear algebra, parallel algorithms, and GPU implementations for large-scale scientific computing.",
        ],
        links: [],
      },
    ],
    pills: ["numerical-methods-hpc"],
  },
  {
    title: "Uncertainty Quantification & Anomaly Detection",
    slug: "uncertainty-anomaly-detection",
    sections: [
      {
        paragraphs: [
          "Probabilistic methods for solving inverse problems, quantifying uncertainty, and detecting failures in complex systems.",
        ],
        links: [],
      },
    ],
    pills: ["uncertainty-anomaly-detection"],
  },
].map(withDescription);

export interface TextSegment {
  text: string;
  url?: string;
}

// Renders a section paragraph by paragraph, each split into plain and linked
// runs. Every linked phrase must appear in exactly one paragraph (and once
// within it, see linkedSegments), so a re-split of the prose can't silently
// drop or duplicate a link.
export const sectionParagraphs = (section: ResearchSection): TextSegment[][] => {
  for (const link of section.links) {
    const hits = section.paragraphs.filter((p) => p.includes(link.text)).length;
    if (hits !== 1) {
      throw new Error(
        `Research link phrase must appear in exactly one paragraph (found ${hits}): "${link.text}"`
      );
    }
  }
  return section.paragraphs.map((paragraph) =>
    linkedSegments(
      paragraph,
      section.links.filter((link) => paragraph.includes(link.text))
    )
  );
};

// Splits `body` into plain and linked runs so a template can render Eric's
// paragraph verbatim with <a> around exactly the requested phrases. Throws
// at build time if a phrase is missing, repeated or overlapping, so a silent
// edit to the prose can't quietly drop a link.
export const linkedSegments = (
  body: string,
  links: ResearchLink[]
): TextSegment[] => {
  const spans = links
    .map((link) => {
      const start = body.indexOf(link.text);
      if (start === -1 || body.indexOf(link.text, start + 1) !== -1) {
        throw new Error(
          `Research link phrase must occur exactly once in the body: "${link.text}"`
        );
      }
      return { ...link, start, end: start + link.text.length };
    })
    .sort((a, b) => a.start - b.start);

  const segments: TextSegment[] = [];
  let cursor = 0;
  for (const span of spans) {
    if (span.start < cursor) {
      throw new Error(`Research link phrases overlap near: "${span.text}"`);
    }
    if (span.start > cursor) segments.push({ text: body.slice(cursor, span.start) });
    segments.push({ text: span.text, url: span.url });
    cursor = span.end;
  }
  if (cursor < body.length) segments.push({ text: body.slice(cursor) });
  return segments;
};
