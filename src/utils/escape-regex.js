const escape = s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");

export default escape;
