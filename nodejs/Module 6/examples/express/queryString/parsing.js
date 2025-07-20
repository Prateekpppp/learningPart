const querystring = require('querystring');
//URL query strings
const query = 'name=Vikram&age=32&city=Bangalore';
const parsed = querystring.decode(query);

console.log(parsed);
