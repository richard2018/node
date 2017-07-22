var example = require('./example.js');
var example2 = require('./example2');
example2();

// console.info(require.resolve("./example"))
Object.keys(require.cache).forEach(function(key) {
  //delete require.cache[key];
})
// console.info(require.cache)

// console.info(require("./example").main)

console.info("demo02: " + (require.main == module))