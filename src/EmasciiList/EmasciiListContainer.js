import { compose, withStateHandlers, withProps, withPropsOnChange } from 'recompose';
import emasciiDict from '../data/emasciis';
import shuffle from 'lodash/shuffle';
import EmasciiList from './EmasciiList';
import flip from 'flip-text';

import { getRelated } from '../utils/datamuse';
import clean from '../utils/clean-emascii-names';

const emasciiNames = Object.keys(emasciiDict);
const shuffledEmasciiNames = shuffle(emasciiNames);

const nameToEmascii = name => ({
  name: name,
  emascii: emasciiDict[name],
});

const suggest = text => {
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

const mapEmasciisToProps = ({ search, relatedWords }) => {
  if (!search) {
    return {
      matched: shuffledEmasciiNames.map(nameToEmascii),
      related: [],
      suggested: [],
    };
  }

  // create list of emasciis that match search
  const matched = shuffledEmasciiNames
    // filter emasciis that match search
    .filter(name => name.match(search))
    .sort();

  // create score by word lookup of related words
  const scoreByWord = relatedWords.reduce((agg, { word, score }) => ({
    ...agg,
    [word]: score,
  }), {});

  const related = shuffledEmasciiNames
    // filter emasciis that match related words
    .filter(name => scoreByWord[clean(name)])

    // remove emasciis that are in matched
    .filter(name => !matched.includes(name))

    // sort on word distance
    .sort((a, b) => {
      const scoreA = scoreByWord[clean(a)] || 0;
      const scoreB = scoreByWord[clean(b)] || 0;

      return scoreB - scoreA;
    });

  return {
    matched: matched.map(nameToEmascii),
    related: related.map(nameToEmascii),
    suggested: suggest(search),
  };
};

const withRelatedWords = compose(
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

const EmasciiListContainer = compose(
  withRelatedWords,
  withProps(mapEmasciisToProps),
)(EmasciiList);

export default EmasciiListContainer;
