import fs from "fs";
import path from "path";
import Handlebars from "handlebars";
import { extractModules } from "./extractor.js";
import { generateSidebar } from "./sidebar.js";

const INPUT_JSON = "./output.json";
const TEMPLATE_FILE = "./template.md";
const OUTPUT_DIR = "./docs/sdk";
const SIDEBAR_FILE = "./docs/.vitepress/sidebar.ts";

// 🔥 Read template from filesystem instead of hardcoded TS
const templateSource = fs.readFileSync(TEMPLATE_FILE, "utf-8");
const compiled = Handlebars.compile(templateSource);

const modules = extractModules(INPUT_JSON);

for (const mod of modules) {
  const output = compiled(mod);

  const filePath = path.join(OUTPUT_DIR, `${mod.moduleLocation}.md`);

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, output);
}

// Generate sidebar
const sidebar = generateSidebar(modules);
fs.mkdirSync(path.dirname(SIDEBAR_FILE), { recursive: true });
fs.writeFileSync(SIDEBAR_FILE, sidebar);

console.log("✅ Documentation generated successfully");
