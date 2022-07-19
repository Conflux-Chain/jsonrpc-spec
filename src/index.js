const CfxOpenRPC = require('./cfx/cfx.json');
const CfxExamples = require('./cfx/examples.json');
const EthOpenRPC = require('./eth/eth.json');
const EthExamples = require('./eth/examples.json');

module.exports = {
  CFX: {
    OpenRPC: CfxOpenRPC,
    Examples: CfxExamples,
  },
  ETH: {
    OpenRPC: EthOpenRPC,
    Examples: EthExamples,
  },
}