import { ModuleDoc } from "./types.js";

export function generateSidebar(modules: ModuleDoc[]) {
  const items = modules.map((m) => ({
    text: m.moduleLocation,
    link: `/sdk/${m.moduleLocation}`,
  }));

  return `export default {
  "/sdk/": [
    {
      text: "Get Started",
      link: "/sdk/get-started/"
    },
    {
      text: "SDK",
      link: "/sdk/",
      items: ${JSON.stringify(items, null, 4)}
    }
  ]
}`;
}