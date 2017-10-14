const clean = key => key
    .replace(/-/g,' ')
    .replace(/\d/g,'')
    .trim();

export default clean;