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
    category: "Featured work / Research",
    summary:
      "A dedicated space for a deeper investigation. The question, process, and discoveries will take shape here.",
    status: "Content coming soon",
    visual: "orbits",
    accent: "#bcc7a3",
    sections: [
      {
        id: "overview",
        title: "Overview",
        text: "The thesis topic and its context will be introduced here. This page is a placeholder for the actual work.",
      },
      {
        id: "question",
        title: "Research question",
        text: "The central question, motivation, and scope of the research will be added once the thesis content is ready.",
      },
      {
        id: "approach",
        title: "Approach",
        text: "The methods, tools, and key decisions will be documented here, with room for diagrams and examples from the work.",
      },
      {
        id: "outcomes",
        title: "Outcomes",
        text: "Findings, limitations, and reflections will be shared here. No research results are available on this page yet.",
      },
    ],
    resources: [],
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
