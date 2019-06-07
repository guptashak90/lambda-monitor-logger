const replacer = (key, value) => {
  if (value instanceof Object && !Array.isArray(value)) {
    return value;
  }
  if (typeof value === 'string') {
    if (value.length > 128) {
      return `${value.slice(0, 56)}...${value.slice(-56)}`;
    }
    return value;
  }
  if (Array.isArray(value) && value.length > 14) {
    return [
      ...value.slice(0, 7),
      '...',
      ...value.slice(-7)
    ];
  }
  return value;
};
module.exports = value => JSON.stringify(value, replacer);
