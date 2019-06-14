const util = require('util');

const maxStringLength = 1073741799;
//Max string length is:1073741799 characters in chrome
module.exports = value => util.inspect(value, {
  compact: true,
  maxArrayLength: 14,
  depth: 16,
  stylize: (str, type) => {
    if (type === 'string' && str.length > maxStringLength) {
      return `${str.slice(0, maxStringLength + 1)}...`;
    }
    return str;
  }
}).replace(/(:?)\s*\n\s*/g, (_, colon) => (colon ? ': ' : ''));
