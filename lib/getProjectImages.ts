// lib/getProjectImages.ts
import fs from "fs";
import path from "path";

const VALID = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

export function getProjectImages(jobNo: string): string[] {
  const dir = path.join(process.cwd(), "public", "project-images", jobNo);
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }
  return files
    .filter((f) => VALID.has(path.extname(f).toLowerCase()))
    .sort((a, b) => {
      // sort 01,02,03… then fallback natural
      const an = parseInt(a.replace(/\D/g, "")) || 0;
      const bn = parseInt(b.replace(/\D/g, "")) || 0;
      return an - bn || a.localeCompare(b, undefined, { numeric: true });
    })
    .map((f) => `/project-images/${jobNo}/${f}`);
}
