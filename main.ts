// The Funniest Out-of-Office — u-kreutzx-the-funniest-out-of-office-054815cf
// One line of an out-of-office auto-reply (at most 140 chars). Duel-tested
// winner (16 drafts, pairwise against the judge criteria, see duel-test.md):
// "Out of office until Monday. I left an intern in charge of my inbox. The
// intern is a Roomba. It has vacuumed your email twice." (125 chars)
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Out of office until Monday. I left an intern in charge of my inbox. The intern is a Roomba. It has vacuumed your email twice.";

// The bounty gate: exactly one line, 1-140 chars. Fail loudly instead of
// writing a bad entry.
if (LINE.length > 140 || LINE.length < 1 || LINE.includes("\n")) {
  throw new Error(
    `entry line must be one line of 1-140 chars (got ${LINE.length})`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
