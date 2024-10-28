// helper functions
const madlib = require("./madlib");
// "runner" functions
const main = () => {
  let message = madlib("Basket Weaver", "Gilbert", "breakdance", false);
  return message
};

console.log(main());
