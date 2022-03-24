const fs = require('fs');
const path = require('path');

const openrpc = require(path.join(__dirname, '../service-descriptions/cfx.json'));

for (let i in openrpc.methods) {
  openrpc.methods[i].result.name = `${openrpc.methods[i].name}Result`;
}

fs.writeFileSync('./service-descriptions/cfx.json', JSON.stringify(openrpc, null, 2));