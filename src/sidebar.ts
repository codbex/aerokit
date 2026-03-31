import { ModuleDoc } from "./types.js";

export function generateSidebar(modules: ModuleDoc[]) {
  const groups: Record<string, any[]> = {};
  const groupsIndex: Record<string, string> = {};

  for (const m of modules) {
    const groupName = m.package || "General";

    if (!groups[groupName]) {
      groups[groupName] = [];
    }

    if (m.moduleLocation.endsWith("/index")) {
      groupsIndex[groupName] = `/sdk/${m.moduleLocation}`;
    } else {
      groups[groupName].push({
        text: m.name || m.moduleLocation,
        link: `/sdk/${m.moduleLocation}`,
      });
    }
  }

  const priorityGroups = [
    "@aerokit/sdk/http",
    "@aerokit/sdk/db",
    "@aerokit/sdk/core",
    "@aerokit/sdk/bpm",
    "@aerokit/sdk/io",
    "@aerokit/sdk/component"
  ];

  // Convert grouped object → VitePress sidebar structure
  const groupedItems = Object.entries(groups).map(([group, items]) => ({
    text: group,
    collapsed: false,
    link: groupsIndex[group] || undefined,
    items,
  })).sort((a, b) => {
    const aPriority = priorityGroups.indexOf(a.text);
    const bPriority = priorityGroups.indexOf(b.text);

    if (aPriority === -1 && bPriority === -1) {
      return a.text.localeCompare(b.text);
    } else if (aPriority === -1) {
      return 1;
    } else if (bPriority === -1) {
      return -1;
    } else {
      return aPriority - bPriority;
    }
  });

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