console.log ("hello node.js");

let pin = 666;
console.log (pin);

// Recover the pin variable
const envPin = process.env.PIN;
console.log (envPin);

// Recovery from program
const arg = process.argv[2];
console.log (arg);
