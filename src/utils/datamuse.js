// https://github.com/ansteh/datamuse/blob/master/lib/query.js

const querystring = require("querystring");

const stringify = options => {
  if (typeof options === "string") {
    return encodeURI(options);
  }
  return querystring.stringify(options);
};

const get = query => {
  return fetch(`https://api.datamuse.com/${query}`, {
    json: true,
    mode: "cors",
    header: {
      "Access-Control-Allow-Origin": "*"
    }
  }).then(response => response.json());
};

export const getRelated = text => get(`words?${stringify({ ml: text })}`);
