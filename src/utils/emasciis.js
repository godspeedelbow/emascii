import emasciiDict from "../data/emasciis";
import shuffle from "lodash/shuffle";

const emasciiNames = Object.keys(emasciiDict);

export const shuffledEmasciiNames = shuffle(emasciiNames);

export const nameToEmascii = name => ({
  name: name,
  emascii: emasciiDict[name]
});
