// Day one, day seven — make.fun entry (Node 22, standard library only).
//
// The entry is the TikTok video itself: a short clip about "Star Hop", the
// tiny agent-built game, on the day it was made and after a week of daily
// updates, ending with make.fun's referral end card. This program does the
// one thing the gate needs: it hands VIDEO.json (the video's TikTok address)
// to the grader by copying it into the output directory.
//
// Run it locally the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// and out/VIDEO.json is then byte for byte this repository's VIDEO.json.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function main(): void {
  const source = join(BOT_DIR, "VIDEO.json");
  let raw: string;
  try {
    raw = readFileSync(source, "utf8");
  } catch (err) {
    console.error(`could not read VIDEO.json from ${BOT_DIR}: ${(err as Error).message}`);
    process.exit(1);
  }

  // The gate reads VIDEO.json as a JSON object naming a TikTok video, so
  // refuse to hand on anything that is not at least that shape.
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    console.error("VIDEO.json is not valid JSON");
    process.exit(1);
  }
  if (typeof parsed !== "object" || parsed === null || typeof (parsed as { url?: unknown }).url !== "string") {
    console.error('VIDEO.json must be an object with a "url" string');
    process.exit(1);
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, "VIDEO.json"), raw, "utf8");
  console.log(`VIDEO.json written to ${OUTPUT_DIR}`);
}

main();
