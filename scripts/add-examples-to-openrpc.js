const fs = require('fs');

const examples = require(process.argv[2]);
const openrpc = require(process.argv[3]);

for(let i in openrpc.methods) {
  let method = openrpc.methods[i];
  method.examples = examples[method.name] || [];
}

fs.writeFileSync(process.argv[3], JSON.stringify(openrpc, null, 2));