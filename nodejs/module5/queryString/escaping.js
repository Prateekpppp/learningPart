const querystring = require('querystring');

const unsafe = 'name=Vikram Maiya&city=New York';
const escaped = querystring.escape(unsafe);

console.log(escaped);



// ✅ Spaces become %20
// ✅ = becomes %3D
// ✅ & becomes %26