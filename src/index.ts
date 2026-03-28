import fs from "fs";
import path from "path";
import Handlebars from "handlebars";
import { extractModules } from "./extractor.js";
import { generateSidebar } from "./sidebar.js";

const INPUT_JSON = "./docs/typedoc/output.json";
const TEMPLATE_PAGES_DIR = "./docs/template-pages";
const SDK_OUTPUT_DIR = "./docs/sdk";
const SIDEBAR_FILE = "./docs/.vitepress/sidebar.ts";

const templateSource = fs.readFileSync(path.join(TEMPLATE_PAGES_DIR, "page.template"), "utf-8");
const compiled = Handlebars.compile(templateSource);

const modules = extractModules(INPUT_JSON);

for (const mod of modules) {
  const output = compiled(mod);

  const filePath = path.join(SDK_OUTPUT_DIR, `${mod.moduleLocation}.md`);

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, output);
}

const mainPage = fs.readFileSync(path.join(TEMPLATE_PAGES_DIR, "index.md"), "utf-8");
const getStartedPage = fs.readFileSync(path.join(TEMPLATE_PAGES_DIR, "get-started.md"), "utf-8");
fs.writeFileSync(path.join(SDK_OUTPUT_DIR, 'index.md'), mainPage);
fs.writeFileSync(path.join(SDK_OUTPUT_DIR, 'get-started.md'), getStartedPage);

// Generate sidebar
const sidebar = generateSidebar(modules);
fs.mkdirSync(path.dirname(SIDEBAR_FILE), { recursive: true });
fs.writeFileSync(SIDEBAR_FILE, sidebar);

console.log("✅ Documentation generated successfully");
