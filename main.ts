import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FINAL_LINE =
  "I tried meal-prepping on Sunday and by Wednesday the containers had unionised against me.";

const DEFAULT_OUTPUT_DIR = "/output";

function pickOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv !== undefined && fromEnv.length > 0) {
    return fromEnv;
  }
  return DEFAULT_OUTPUT_DIR;
}

function writeEntry(): void {
  const outDir = pickOutputDir();
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, FINAL_LINE + "\n", "utf8");
}

writeEntry();
