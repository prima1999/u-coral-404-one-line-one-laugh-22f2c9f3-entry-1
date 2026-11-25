// One Line, One Laugh — a make.fun bounty entry.
// The program writes one original funny line to /output/entry.txt.
// It is fully deterministic: no clock, no randomness, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join as joinPath } from "node:path";

const LINE: string =
  "I tried meal-prepping on Sunday and by Wednesday the containers had unionised against me.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(joinPath(outputDir, "entry.txt"), LINE, "utf8");
