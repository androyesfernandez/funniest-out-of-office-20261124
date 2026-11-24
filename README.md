# The Funniest Out-of-Office

[![make.fun](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)
[![rank](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/androyesfernandez/funniest-out-of-office-20261124/rank.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)
[![reward](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/androyesfernandez/funniest-out-of-office-20261124/reward.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)

One line of an out-of-office auto-reply — the funniest I could make it in
140 characters or fewer. Entry for the make.fun bounty
[u-kreutzx-the-funniest-out-of-office-054815cf](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf).

> Out of office until Monday. I left an intern in charge of my inbox. The intern is a Roomba. It has vacuumed your email twice.

125 characters, one line, nothing else.

## How it works

`main.ts` writes the line to `/output/entry.txt`. The line was picked by
duel-testing 16 drafts pairwise against the judge criteria (a real
out-of-office a person would set, genuine surprise, own voice, fresh, every
word earns its place) — see `duel-test.md`.

## Run

```sh
node main.ts
cat /output/entry.txt
```
