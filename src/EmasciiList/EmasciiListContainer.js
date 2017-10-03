import { compose, withProps } from 'recompose';
import emasciiDict from '../data/emasciis';
import shuffle from 'lodash/shuffle';
import EmasciiList from './EmasciiList';
import flip from 'flip-text';

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

const mapEmasciisToProps = ({ search }) => {
  const emasciis = shuffledEmasciiNames
    .filter(key => {
      if (!search) {
        return true;
      }
      return key.match(search);
    })
    .map(name => ({
      name: name,
      emascii: emasciiDict[name],
    }));
  return {
    emasciis: [
      ...emasciis,
      ...suggest(search),
    ]
  };
};

const EmasciiListContainer = compose(
  withProps(mapEmasciisToProps),
)(EmasciiList);

export default EmasciiListContainer;
