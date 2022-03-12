import Color from "color";

export default function mix(color1, color2, strenth = 1) {
  return Color(color1).mix(Color(color2), strenth).hex();
}
