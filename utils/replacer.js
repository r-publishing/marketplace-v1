// Spec http://www.ecma-international.org/ecma-262/6.0/#sec-json.stringify
const replacer = (key, value) =>
  value instanceof Object && !(value instanceof Array)
    ? Object.keys(value)
        .sort()
        .reduce((sorted, key) => {
          sorted[key] = value[key];
          return sorted;
        }, {})
    : value;

export default replacer;