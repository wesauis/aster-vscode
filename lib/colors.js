import mix from "../lib/mix.js";
import Color from "color";

const dim = (hex, ratio = 0.2) => {
  let color = Color(hex);
  color = color.lightness(color.lightness() - ratio);
  console.log(hex, color.hex());
  return color.hex();
};

export default {
  none: "#0000",
  panel: "#181A1B",
  black: "#141617",
  blue: dim("#719DF4"),
  cyan: dim("#48D7C3", 0.18),
  green: dim("#8EC061"),
  red: "#ec9393",
  purple: "#c975f0",
  pink: "#ff69b4",
  yellow: dim("#F0C544", 0.25),
  brightWhite: "#E8E5E3",
  get white() {
    return mix(this.black, this.brightWhite, 0.85);
  },
  get foreground() {
    return this.white;
  },
  get selectionBackground() {
    return this.white;
  },
  get cursorColor() {
    return this.yellow;
  },
  get background() {
    return this.black;
  },
  get brightBlack() {
    return mix(this.black, this.brightWhite, 0.5);
  },
  get brightBlue() {
    return mix(this.blue, this.brightWhite, 0.25);
  },
  get brightCyan() {
    return mix(this.cyan, this.brightWhite, 0.4);
  },
  get brightGreen() {
    return mix(this.green, this.brightWhite, 0.25);
  },
  get brightRed() {
    return mix(this.aux, this.brightWhite, 0.25);
  },
  get brightPink() {
    return mix(this.pink, this.brightWhite, 0.4);
  },
  get brightPurple() {
    return mix(this.purple, this.brightWhite, 0.4);
  },
  get brightYellow() {
    return mix(this.yellow, this.brightWhite, 0.25);
  },
  get dimBlack() {
    return mix(this.black, this.black, 0.5);
  },
  get dimBlue() {
    return mix(this.blue, this.black, 0.25);
  },
  get dimCyan() {
    return mix(this.cyan, this.black, 0.4);
  },
  get dimGreen() {
    return mix(this.green, this.black, 0.25);
  },
  get dimRed() {
    return mix(this.red, this.black, 0.25);
  },
  get dimPink() {
    return mix(this.pink, this.black, 0.4);
  },
  get dimPurple() {
    return mix(this.purple, this.black, 0.4);
  },
  get dimYellow() {
    return mix(this.yellow, this.black, 0.25);
  },
  get surfaceYellow() {
    return mix(this.yellow, this.black, 0.75);
  },
  get grayYellow() {
    return mix(this.yellow, this.brightBlack, 0.75);
  },
};
