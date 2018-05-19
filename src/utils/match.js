import uniq from "lodash/uniq";

import escapeRegEx from "./escape-regex";

import { shuffledEmasciiNames } from "./emasciis";
import westernEmojiLookup from "../data/wikipedia-western-lookup";

// create list of emascii names that match search
export function getFuzzyNameMatches(search) {
  const cleanSearch = escapeRegEx(search);

  // filter emasciis that match search
  const matches = shuffledEmasciiNames.filter(name => name.match(cleanSearch));

  return matches;
}

// create list of emascii names that associate with search
export function getWesternEmojiMatches(search) {
  const searchRegEx = escapeRegEx(search.trim());
  const emojiNames = Object.entries(westernEmojiLookup)
    .filter(([emo]) => emo.match(searchRegEx))
    .reduce((agg, [emo, names]) => [...agg, ...names], []);

  const uniqueEmojiNames = uniq(emojiNames);

  // filter emasciis that match western mapping
  const matches = shuffledEmasciiNames.filter(emasciiName =>
    uniqueEmojiNames.find(match => emasciiName.match(match))
  );

  return matches;
}

// create list of emascii names based on related words
export function getRelatedWordsMatches(search, relatedWords) {
  // create score by word lookup of related words
  const scoreByWordLookup = relatedWords.reduce(
    (agg, { word, score }) => ({
      ...agg,
      [word]: score
    }),
    {}
  );

  const clean = name =>
    name
      .replace(/-/g, " ")
      .replace(/\d/g, "")
      .trim();

  const matches = shuffledEmasciiNames
    // filter emasciis that match related words
    .filter(name => scoreByWordLookup[clean(name)])

    // sort on word distance
    .sort((a, b) => {
      const scoreA = scoreByWordLookup[clean(a)] || 0;
      const scoreB = scoreByWordLookup[clean(b)] || 0;

      return scoreB - scoreA;
    });

  return matches;
}
