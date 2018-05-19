import { compose, withStateHandlers, withProps, withPropsOnChange } from "recompose";

import { getRelated } from "../utils/datamuse";
import { shuffledEmasciiNames, nameToEmascii } from "../utils/emasciis";
import {
  getFuzzyNameMatches,
  getWesternEmojiMatches,
  getRelatedWordsMatches
} from "../utils/match";
import suggest from "../utils/suggest";

import EmasciiList from "./EmasciiList";

const EmasciiListContainer = compose(
  withRelatedWords(),
  withProps(mapEmasciisToProps),
)(EmasciiList);

export default EmasciiListContainer;

function mapEmasciisToProps({ search, relatedWords }) {
  if (!search) {
    return {
      matched: shuffledEmasciiNames.map(nameToEmascii),
      related: [],
      suggested: [],
    };
  }

  const fuzzyNameMatches = getFuzzyNameMatches(search);
  const westernEmojiMatches = getWesternEmojiMatches(search);
  const relatedWordsMatches = getRelatedWordsMatches(search, relatedWords);

  const related = [...relatedWordsMatches, ...westernEmojiMatches]
    // remove emasciis that are already matched
    .filter(name => !fuzzyNameMatches.includes(name));

  return {
    matched: fuzzyNameMatches.map(nameToEmascii),
    related: related.map(nameToEmascii),
    suggested: suggest(search)
  };
}

function withRelatedWords() {
  return compose(
    withStateHandlers({
      relatedBySearch: {},
    }, {
      setRelatedBySearch: ({ relatedBySearch }) => (search, relatedWords) => ({
        relatedBySearch: {
          ...relatedBySearch,
          [search]: relatedWords,
        },
      }),
    }),
    withPropsOnChange(['search'], ({ search, relatedBySearch, setRelatedBySearch }) => {
      if (!search || relatedBySearch[search]) {
        return; // no need to fetch
      }
      getRelated(search)
        .then(relatedWords => setRelatedBySearch(search, relatedWords));
    }),
    withProps(({ relatedBySearch, search }) => ({
      relatedWords: relatedBySearch[search] || [],
    })),
  );
}
