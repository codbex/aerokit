import { ModuleDoc } from "./types.js";

export function generateSidebar(modules: ModuleDoc[]) {
  const items = modules.map((m) => ({
    text: m.moduleLocation,
    link: `/sdk/${m.moduleLocation}`,
  }));

  return `export default {
  "/sdk/": [
    {
      text: "SDK",
      items: ${JSON.stringify(items, null, 4)}
    }
  ]
}`;
}