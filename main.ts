import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "Earth review: the oceans are lovely, the wifi is everywhere, and the dominant species apologises to furniture when it bumps into it. Four stars, would orbit again.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
