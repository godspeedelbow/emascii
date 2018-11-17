const IS_SUPPORTED = isSupported();

export function getObject(key) {
  const val = get(key);
  try {
    return JSON.parse(val);
  } catch (e) {
    return null;
  }
}

export function setObject(key, val) {
  try {
    set(key, JSON.stringify(val));
  } catch (e) {}
  return undefined;
}

export function set(key, val) {
  if (!IS_SUPPORTED) return "";
  return localStorage.setItem(key, val);
}

export function get(key) {
  if (!IS_SUPPORTED) return "";
  return localStorage.getItem(key);
}

function isSupported() {
  const key = "EMASCII_TEST_LOCALSTORAGE";
  try {
    localStorage.setItem(key, key);
    localStorage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
}
