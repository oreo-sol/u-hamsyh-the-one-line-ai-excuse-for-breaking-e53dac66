import { mkdirSync, writeFileSync } from "node:fs";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "The deploy passed all 400 tests. Unfortunately, production was test number 401.");
