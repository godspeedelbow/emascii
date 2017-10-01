import { compose, withProps } from 'recompose';
import emasciiDict from '../data/emasciis';
import shuffle from 'lodash/shuffle';
import EmasciiList from './EmasciiList';

const emasciiNames = Object.keys(emasciiDict);
const shuffledEmasciiNames = shuffle(emasciiNames);
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
    emasciis,
  };
};

const EmasciiListContainer = compose(
  withProps(mapEmasciisToProps),
)(EmasciiList);

export default EmasciiListContainer;
