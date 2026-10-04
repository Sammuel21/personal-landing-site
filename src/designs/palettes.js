// Layout controls composition; palettes control colour roles in either layout.
// Artwork colours belong to portfolio content, independently of these UI colours.
export const palettes = {
  olive: {
    label: "Olive",
    description: "Original ivory & olive",
    mode: "light",
    colors: {
      background: "#f4f2e9",
      foreground: "#262820",
      muted: "#5f6252",
      accent: "#5e6a48",
      surface: "#eeeee3",
      raised: "#e7e9dc",
      line: "#d6d7ca",
      border: "#939986",
    },
  },
  lagoon: {
    label: "Lagoon",
    description: "Original charcoal & turquoise",
    mode: "dark",
    colors: {
      background: "#101516",
      foreground: "#f2f2ea",
      muted: "#a9b7b9",
      accent: "#b4e6df",
      surface: "#192323",
      raised: "#243434",
      line: "#303638",
      border: "#6a8280",
    },
  },
  silver: {
    label: "Silver",
    description: "White / black / silver",
    mode: "light",
    colors: {
      background: "#fafafa",
      foreground: "#17191c",
      muted: "#5c6068",
      accent: "#4b515d",
      surface: "#f0f1f3",
      raised: "#e5e7eb",
      line: "#d4d7dc",
      border: "#8b9099",
    },
  },
  graphite: {
    label: "Graphite",
    description: "Black / silver / white",
    mode: "dark",
    colors: {
      background: "#131416",
      foreground: "#f7f7f8",
      muted: "#b1b5bc",
      accent: "#d4d8e0",
      surface: "#1d1f23",
      raised: "#2c2f35",
      line: "#363940",
      border: "#757b85",
    },
  },
  ember: {
    label: "Ember",
    description: "Cream / brown / burnt orange",
    mode: "light",
    colors: {
      background: "#fbf3e9",
      foreground: "#39251d",
      muted: "#755846",
      accent: "#a4411c",
      surface: "#f4e7d8",
      raised: "#edd8c3",
      line: "#ddcbb9",
      border: "#9c7961",
    },
  },
  cobalt: {
    label: "Cobalt",
    description: "White / midnight / blue",
    mode: "light",
    colors: {
      background: "#f7f9ff",
      foreground: "#172443",
      muted: "#536480",
      accent: "#2557c6",
      surface: "#edf1fc",
      raised: "#dfe7fa",
      line: "#ced8ee",
      border: "#7d90b8",
    },
  },
  vermilion: {
    label: "Vermilion",
    description: "Warm white / charcoal / red",
    mode: "light",
    colors: {
      background: "#faf6f2",
      foreground: "#2b2224",
      muted: "#715a5c",
      accent: "#b33130",
      surface: "#f3e9e4",
      raised: "#eedad5",
      line: "#dfcfca",
      border: "#a08683",
    },
  },
  amethyst: {
    label: "Amethyst",
    description: "Ink / soft white / purple",
    mode: "dark",
    colors: {
      background: "#19151f",
      foreground: "#f7f1fa",
      muted: "#bbadca",
      accent: "#c5a5ee",
      surface: "#25202f",
      raised: "#382e46",
      line: "#41364d",
      border: "#897498",
    },
  },
  solar: {
    label: "Solar",
    description: "Ivory / chocolate / golden sun",
    mode: "light",
    colors: {
      background: "#fff8e5",
      foreground: "#3b2b13",
      muted: "#735b35",
      accent: "#825408",
      surface: "#f9edcd",
      raised: "#f3dda5",
      line: "#e3d2a8",
      border: "#a58b55",
    },
  },
  lunar: {
    label: "Lunar",
    description: "Midnight / silver / icy moonlight",
    mode: "dark",
    colors: {
      background: "#121a2a",
      foreground: "#f1f5fb",
      muted: "#adbdd2",
      accent: "#c2d8f3",
      surface: "#1b273b",
      raised: "#2b3b53",
      line: "#35455d",
      border: "#7187a5",
    },
  },
};

export const defaultPalettes = {
  editorial: "olive",
  ambient: "lagoon",
  eclipse: "lunar",
  lattice: "silver",
  studio: "vermilion",
};
export const paletteNames = Object.keys(palettes);
export function getPalette(name) {
  return Object.hasOwn(palettes, name) ? palettes[name] : undefined;
}

export function previewPath(design, palette, slug) {
  return `/preview/${design}/palette/${palette}${slug ? `/projects/${slug}` : ""}`;
}
