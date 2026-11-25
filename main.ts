import { mkdirSync, writeFileSync } from "node:fs";
const entry = "Earth: five stars for the sunsets, one star for the locals, who keep asking the alien for the Wi-Fi password.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
