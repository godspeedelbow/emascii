import {
    compose,
    withState,
    withProps,
    withHandlers,
} from 'recompose';
import SearchInput from './search-input';
import uniq from 'lodash/uniq';
import clean from '../utils/clean-emascii-names';

import emasciis from '../data/emasciis';
const keys = Object
  .keys(emasciis)
  .map(clean);

const uniqueKeys = uniq(keys).sort();

console.log('*** uniqueKeys', Object.keys(uniqueKeys).length, uniqueKeys);

const SearchInputContainer = compose(
  withState('search', 'setSearch', ''),
  withState('suggestions', 'setSuggestions', []),
  withHandlers({
    onSuggestionSelected: ({ onChange, search }) => () => {
      onChange(search);
    },
    getSuggestions: ({ search, setSuggestions }) => () => {
      // TODO: type 'a' and you cannot select with key down
      // TODO: for some reason 'happ' doesn't match 'happy' as suggestion
      // TODO: looking for 'angry birds' does not put 'angry birds' on top
      // TODO: regex crashes with \ because it is not escaped
      // TODO: put start of word matches on top
      const textRegExp = new RegExp(`^${search}`, 'ig');
      const matched = uniqueKeys.filter(textRegExp.test.bind(textRegExp))

      setSuggestions(matched.splice(0, 10));
    },
  }),
)(SearchInput);

export default SearchInputContainer;
