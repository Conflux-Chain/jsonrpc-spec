# Conflux JSON-RPC Specification

The Conflux JSON-RPC is a collection of methods. This interface allows downstream tooling and infrastructure to generate code or build mock server.

## Online Viewer

* [cfx namespace methods](https://playground.open-rpc.org/?schemaUrl=https://raw.githubusercontent.com/Conflux-Chain/jsonrpc-spec/main/src/cfx/cfx.json&uiSchema[appBar][ui:splitView]=false&uiSchema[appBar][ui:input]=false&uiSchema[appBar])
* [eth namespace methods](https://playground.open-rpc.org/?schemaUrl=https://raw.githubusercontent.com/Conflux-Chain/jsonrpc-spec/main/src/eth/Eth.json&uiSchema[appBar][ui:splitView]=false&uiSchema[appBar][ui:input]=false&uiSchema[appBar])

## How to run MockServer

Prepare a JSON-RPC description file, you can add examples you want to test into it. Then run the mock-server with follow command:

```sh
npm run mock-server -d the-openrpc.json
```

or

```sh
npx open-rpc-mock-server -p 3333 -d src/cfx/cfx.json
```
