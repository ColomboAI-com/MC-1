import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const documents = ["README.md", "docs/PRODUCT-SUITE.md", "docs/CAPABILITY-STATUS.md"];
const requiredPhrases = [
  "https://colomboai.com/MC-1",
  "https://console.colomboai.com/MC-1/console",
  "https://api.colomboai.com/v1",
  "MC-1 Everywhere",
  "MC-1 Forward",
  "Agent Identity",
  "Agent Guard",
  "Adaptive Intelligence",
  "Admin Control Center",
];

const content = documents.map((path) => readFileSync(join(root, path), "utf8")).join("\n");

for (const phrase of requiredPhrases) {
  if (!content.includes(phrase)) throw new Error(`Missing required public product reference: ${phrase}`);
}

for (const retired of [/https?:\/\/(?:www\.)?cairo\.sh/iu, /chatgpt\.site/iu]) {
  if (retired.test(content)) throw new Error(`Retired public URL remains: ${retired}`);
}

const linkPatterns = [
  /\[[^\]]+\]\(([^)\s]+)(?:\s+"[^"]*")?\)/gu,
  /<(?:a|img)\b[^>]*(?:href|src)=["']([^"']+)["'][^>]*>/giu,
  /<(https?:\/\/[^>]+)>/gu,
];

for (const path of documents) {
  const markdown = readFileSync(join(root, path), "utf8");
  const targets = linkPatterns.flatMap((pattern) => [...markdown.matchAll(pattern)].map((match) => match[1]));
  for (const target of targets) {
    if (/^(?:https?:|mailto:|#)/iu.test(target)) continue;
    const localTarget = target.split("#", 1)[0];
    if (!existsSync(resolve(root, dirname(path), localTarget))) {
      throw new Error(`${path} references missing local target: ${target}`);
    }
  }
}

console.log(`Documentation contract passed for ${documents.length} public MC-1 documents.`);
