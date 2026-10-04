export const portfolio = {
  identity: "Portfolio",
  introduction: {
    eyebrow: "A collection of work & ideas",
    title: ["Curiosity,", "taking shape."],
    artwork: { visual: "orbits", accent: "#b4e6df" },
    description:
      "A space for projects, thoughtful experiments, and the questions that move them forward.",
  },
  biography: {
    title: "A little context.",
    text: "This is where a short introduction will live: a little about me, what interests me, and the kind of work I want to explore next.",
    label: "Biography placeholder",
  },
  contact: {
    title: "Continue the conversation.",
    description: "For now, you can find me and follow the work on GitHub.",
    links: [{ label: "GitHub", href: "https://github.com/Sammuel21" }],
  },
};

export const projects = [
  {
    slug: "diploma-thesis",
    title: "Diploma thesis",
    fullTitle:
      "Compressing Large Language Models via Replacement of MLP Blocks",
    category: "Featured work / Research",
    summary:
      "Can a smaller network do the work of a larger MLP block? Exploring selective replacements inside language models, and the trade-off between model size and quality.",
    status: "Research in progress",
    visual: "orbits",
    accent: "#bcc7a3",
    presentation: {
      original: { name: "Sol", role: "Original model" },
      compressed: {
        name: "Luna",
        role: "Model with smaller MLP replacements",
      },
      diagramColors: { original: "#4169a1", replacement: "#c97658" },
      paperColors: { original: "#e4a873", replacement: "#88a9c3" },
      diagramCaption:
        "Illustrative structure, not a measured compression ratio.",
      steps: [
        {
          title: "Capture the behaviour",
          text: "Run calibration data through the frozen model and collect input/output pairs from a selected MLP block. These pairs describe the transformation the replacement will learn.",
        },
        {
          title: "Fit a smaller replacement",
          text: "Train a smaller network to approximate that transformation. Candidate structures include a linear layer or a shallower MLP, while the surrounding model is kept intact.",
        },
        {
          title: "Evaluate the whole model",
          text: "Insert the replacement and evaluate model quality, including perplexity. A close local approximation is useful, but the effect on the full model is the important test.",
        },
      ],
    },
    sections: [
      {
        id: "overview",
        title: "Overview",
        text: "Large language models contain MLP blocks with substantial parameter and computation costs. This thesis investigates treating an individual block as a function that can be approximated by a smaller network, while preserving the surrounding model structure.",
      },
      {
        id: "question",
        title: "Research question",
        text: "Which MLP blocks can be replaced with smaller alternatives, and how much model quality is lost as compression increases? The aim is to understand the trade-off at both the individual-block and whole-model levels, rather than assume every block should be replaced.",
      },
      {
        id: "approach",
        title: "Approach",
        text: "Collect calibration input/output pairs from a frozen pretrained model, fit smaller substitutes to selected MLP transformations, and evaluate the modified model. The research considers replacement architectures, block selection, and the cumulative effects of replacing multiple blocks.",
      },
      {
        id: "outcomes",
        title: "Outcomes",
        text: "Results are not published on this portfolio yet. The evaluation will examine compression and model-quality trade-offs, including perplexity and the effects of multiple replacements. Smaller size and preserved quality are objectives, not claims of an achieved result.",
      },
    ],
    resources: [
      {
        label: "Explore the thesis repository",
        href: "https://github.com/Sammuel21/diploma-thesis-block-replacement",
      },
    ],
  },
  {
    slug: "future-project-one",
    title: "An idea in motion",
    category: "Future project / Example 01",
    summary:
      "Room for an experiment, a useful tool, or an unexpected direction.",
    status: "Placeholder project",
    visual: "steps",
    accent: "#c5b5a4",
  },
  {
    slug: "future-project-two",
    title: "Something to explore",
    category: "Future project / Example 02",
    summary: "A place for the next question worth spending time with.",
    status: "Placeholder project",
    visual: "grid",
    accent: "#aabdc8",
  },
];

// Only projects with detail content receive a route.
export const detailedProjects = projects.filter((project) => project.sections);
export function getProject(slug) {
  return detailedProjects.find((project) => project.slug === slug);
}
