import flip from "flip-text";

export default suggest;

function suggest(text) {
  const flipped = flip(text);
  const suggestions = [
    {
      name: `flip ${text}`,
      emascii: `(╯°□°)╯︵ ${flipped}`,
    },
    {
      name: `rage flip ${text}`,
      emascii: `(ノಠ益ಠ)ノ彡 ${flipped}`,
    },
    {
      name: `unflip ${text}`,
      emascii: `${text} ノ(ò_óノ)`,
    },
  ];
  return suggestions;
}
