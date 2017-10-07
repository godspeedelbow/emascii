import uplist from './uplist';
import asciiEmojiParser from './ascii-emoji-parser';
import asciimoji from './asciimoji';
import jemoticons from './jemoticons';

const emasciis = {
  ...uplist,
  ...asciiEmojiParser,
  ...asciimoji,
  ...jemoticons,
};

export default emasciis;
