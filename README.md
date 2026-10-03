# :snake: Young Thug Adlib Soundboard :snake:

A browser soundboard of 31 Young Thug adlibs. Click a key or press it on your keyboard to play the sound.

**Repository:** https://github.com/leo12534/young-thug-soundboard

> **Status:** Archived. This was a personal project from 2020–2022 and is no longer maintained.

## Why I built it

I wanted to play some of my favorite Young Thug adlibs for a friend. I assumed the internet would have a million of these, but the best I found was one YouTube video, and it didn't include all of my favorites. So I made my own.

It started from Wes Bos's [#JavaScript30](https://javascript30.com/) Drum Kit challenge, and I added some of my own features:

- Every key is a clickable button, so it works on phones as well as with a keyboard.
- The length of each key's highlight animation depends on how long its sound clip is.
- It has its own styling, background art and Google Fonts.

## Running it locally

The site is plain HTML, CSS and JavaScript with no build step. You can open `docs/index.html` in a browser.

You can also use the Parcel dev server, which reloads the page when you save a file:

```bash
npm install
npm run dev   # serves docs/index.html with Parcel
```

ESLint and Prettier are set up with the `wesbos` config (see `.eslintrc`). There are no tests.

## Project structure

```
docs/
├── index.html    # the keys (buttons) and their <audio> elements
├── style.css     # layout, styling and the "playing" animation
├── thugger.js    # keyboard and click handling, plays the audio
├── img/          # background and other images
└── sounds/       # adlib clips (.mp3 / .m4a)
```

The site is in `docs/` so GitHub Pages can serve it from that folder.

### Adding an adlib

1. Put the clip in `docs/sounds/`.
2. In `docs/index.html`, add a `<button class="content__keys-item" data-key="…">` and an `<audio data-key="…" src="./sounds/…">` that both use the same `data-key`. That value is the key you want to press, in uppercase (for example, `A`, or `1` for the number keys).

## Key map

| Key | Adlib | Key | Adlib | Key | Adlib |
|---|---|---|---|---|---|
| 1 | Machine Gun | Q | Slatt Short | A | Hey |
| 2 | Pew Pew | W | What | S | Hol Up |
| 3 | Yeaow | E | Woo 1 | D | Let's Go |
| 4 | Sheesh 1 | R | Woo 2 | F | Moan |
| 5 | Sheesh 2 | T | Yah Yah Yah | G | Shoo |
| 6 | Ahhh | Y | And What | H | Skrt 1 |
| 7 | Ehhh | U | Ayy | J | Skrt 2 |
| 8 | Harmony 1 | I | Bitch 1 | K | Wavy |
| 9 | Harmony 2 | O | Bitch 2 | L | What 2 |
| 0 | Slatt Long | P | Totally Dude | Z | Whoa |
| | | | | X | YAH |

## Disclaimer

All music, audio and likeness belong to Young Thug, his label and his representatives. This is a non-commercial fan project. Please don't come after me, I'm a HUGE fan.
