const { Server, ServerOptions } = require("@open-rpc/server-js");
const { parseOpenRPCDocument } = require("@open-rpc/schema-utils-js");
const fs = require('fs');
const path = require('path');

const openRpcFile = process.argv[2] || './src/cfx/cfx.json';
const doc = JSON.parse(fs.readFileSync(path.join(__dirname, '..', openRpcFile), 'utf-8'));

async function start() {
  const serverOptions = {
    openrpcDocument: await parseOpenRPCDocument(doc),
    transportConfigs: [
      {
        type: "HTTPTransport",
        options: {
          port: 3330,
          middleware: [],
        },
      },
    ],
    // methodMapping,
    methodMapping: { mockMode: true },
  };

  console.log("Starting Server"); // tslint:disable-line
  const s = new Server(serverOptions);

  s.start();
}

start();