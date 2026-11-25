// Have You Tried Turning It Off? — make.fun entry
// Writes one funny tech-support line deterministically to /output/entry.txt.
// Node 22, standard library only, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "Good news — I've flagged your ticket as top priority, so you're now first in line behind our other 4,127 top-priority tickets.";

const outDir = process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, ENTRY, "utf8");
