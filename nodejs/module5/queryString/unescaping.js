const querystring = require('querystring');

const escaped = 'name%3DVikram%20Maiya%26city%3DNew%20York';
const unescaped = querystring.unescape(escaped);

console.log(unescaped);
