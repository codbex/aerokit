import { ModuleDoc } from "./types.js";

export function generateSidebar(modules: ModuleDoc[]) {
  const groups: Record<string, any[]> = {};

  for (const m of modules) {
    const groupName = m.package || "General";

    if (!groups[groupName]) {
      groups[groupName] = [];
    }

    groups[groupName].push({
      text: m.name || m.moduleLocation,
      link: `/sdk/${m.moduleLocation}`,
    });
  }

  // Convert grouped object → VitePress sidebar structure
  const groupedItems = Object.entries(groups).map(([group, items]) => ({
    text: group,
    collapsed: false,
    items,
  }));

  return `export default {
  "/sdk/": [
    {
      text: "Get Started",
      link: "/sdk/get-started/"
    },
    {
      text: "SDK",
      items: ${JSON.stringify(groupedItems, null, 4)}
    }
  ]
}`;
}