import fs from "fs";
import { ModuleDoc } from "./types.js";

function getText(comment?: any): string {
  if (!comment?.summary) return "";
  return comment.summary.map((s: any) => s.text).join("");
}

function getReturn(comment?: any): string {
  const tag = comment?.blockTags?.find((t: any) => t.tag === "@returns");
  if (!tag) return "";
  return tag.content.map((c: any) => c.text).join("");
}

function buildSignature(method: any): string {
  const sig = method.signatures?.[0];
  const params = (sig?.parameters || [])
    .map((p: any) => `${p.name}: ${p.type?.name || "any"}`)
    .join(", ");

  return `${method.flags?.isStatic ? "static " : ""}${method.name}(${params}): ${sig?.type?.name || "void"};`;
}

export function extractModules(jsonPath: string): ModuleDoc[] {
  const typedoc = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

  const modules = typedoc.children || [];

  return modules
    .filter((m: any) => m.kind === 2 && m.children)
    .map((module: any) => ({
      moduleLocation: module.name,
      overview: "",
      classes: (module.children || [])
        .filter((c: any) => c.kind === 128)
        .map((cls: any) => ({
          name: cls.name,
          methods: (cls.children || [])
            .filter((m: any) => m.kind === 2048)
            .map((method: any) => {
              const sig = method.signatures?.[0];

              return {
                name: method.name,
                description: getText(sig?.comment),
                signature: buildSignature(method),
                params: (sig?.parameters || []).map((p: any) => ({
                  name: p.name,
                  type: p.type?.name || "any",
                  description: getText(p.comment),
                })),
                returnType: sig?.type?.name || "void",
                returnDescription: getReturn(sig?.comment),
              };
            }),
        })),
    }));
}