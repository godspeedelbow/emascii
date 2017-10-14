import { compose, withState, withProps, withPropsOnChange } from 'recompose';
import emasciiDict from '../data/emasciis';
import shuffle from 'lodash/shuffle';
import EmasciiList from './EmasciiList';
import flip from 'flip-text';

import { getRelated } from '../utils/datamuse';

const emasciiNames = Object.keys(emasciiDict);
const shuffledEmasciiNames = shuffle(emasciiNames);
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

const clean = key => key
  .replace(/-/g,'')
  .replace(/\d/g,'')

const mapEmasciisToProps = ({ search, related }) => {
  // create score board of related words
  // exact match (search) has highest score
  const highestScore = related.length ? related[0].score + 1 : 1;
  const exactMatch = { word: search, score: highestScore };
  const scoreLookup = [
    ...related,
    exactMatch, // inject exact match
  ].reduce((agg, { word, score }) => ({
    ...agg,
    [word]: score,
  }), {});

  // filter emasciis that match search or related words
  const filtered = shuffledEmasciiNames.filter(key => {
    if (!search) {
      return true;
    }
    const cleanKey = clean(key);

    if (scoreLookup[cleanKey]) return true;
    if (key.match(search)) return true;
    return false;
  });

  // sort on word distance
  const sorted = !search ? filtered : filtered.sort((a, b) => {
    const cleanA = clean(a);
    const cleanB = clean(b);

    const scoreA = scoreLookup[cleanA] || 0;
    const scoreB = scoreLookup[cleanB] || 0;

    return scoreB - scoreA;
  });

  // map the emasciis
  const mapped = sorted.map(name => ({
    name: name,
    emascii: emasciiDict[name],
  }));

  // add table flipping suggestions
  const withSuggestions = [
    ...mapped,
    ...suggest(search),
  ];

  return {
    emasciis: withSuggestions,
  };
};

const EmasciiListContainer = compose(
  withState('related', 'setRelated', []),
  withPropsOnChange(['search'], ({ search, setRelated }) => {
    if (!search) {
      return setRelated([]);
    }
    getRelated(search).then(setRelated);
  }),
  withProps(mapEmasciisToProps),
)(EmasciiList);

export default EmasciiListContainer;
