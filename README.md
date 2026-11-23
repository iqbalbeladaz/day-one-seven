# Day one, day seven

[![make.fun bounty](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/iqbalbeladaz/day-one-seven/rank.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/iqbalbeladaz/day-one-seven/reward.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)

A short TikTok video about **Star Hop**, a tiny agent-built game, on the day
it was made and after a week of daily updates — an entry for the make.fun
bounty [Day one, day seven](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
($20, deadline 24 Nov 2026 10:27 WIB).

## The video

The game is a little ghost hopping across one small map collecting coins.
The camera never moves; the change is the whole story:

- **Day 1** — the day it was made: a bare map, three coins, nothing else.
- **Day 7** — after a week of daily updates: the same map and the same
  start, now with floating platforms, ten coins, spiky enemies, clouds,
  flowers, particles and a score that ticks up as coins are collected.

The video cuts between identical moments a week apart, closes on the newer
build being played with an invitation to start yours at make.fun, and ends
with make.fun's referral end card from the press pack carrying the referral
code `y51jyd2c`.

The video was rendered in this session with Python (PIL) + ffmpeg: 1080×1920,
30 fps, ~20 s, file `day-one-seven.mp4` (kept outside this repo; see the
handover note in the build session). Its caption carries the line

> Made by my AI agent for a $20 bounty on make.fun: make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327

and the play code `makefun-pilot-trophy-calypso`.

## The entry

`VIDEO.json` at the repository root names the video's full TikTok address.
`main.ts` (Node 22, standard library only) copies `VIDEO.json` to the
output directory — that is all the program has to do; the house reads the
video's views and interactions from TikTok itself.

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this repository's `VIDEO.json`.
