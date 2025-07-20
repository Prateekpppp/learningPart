const querystring = require('querystring');

const obj = { name: 'Vikram', age: 32, city: 'Bangalore' };
const stringified = querystring.stringify(obj);
//URL query strings
console.log(stringified);
