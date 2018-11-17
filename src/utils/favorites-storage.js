import { setObject, getObject } from "./local-storage";

const FAVORITES_KEY = "EMASCII_FAVORITES";
const favorites = getObject(FAVORITES_KEY) || {};

export function getFavorite(name) {
  return favorites[name] || 0;
}

export function setFavorite(name) {
  const count = favorites[name] || 0;

  favorites[name] = count + 1;
  setObject(FAVORITES_KEY, favorites);

  return favorites[name];
}

export function removeFavorite(name) {
  favorites[name] = 0;
  setObject(FAVORITES_KEY, favorites);

  return favorites[name];
}
