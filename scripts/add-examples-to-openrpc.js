const fs = require('fs');

const { examples } = JSON.parse(fs.readFileSync(process.argv[2]));
const openrpc = JSON.parse(fs.readFileSync(process.argv[3]));

// let newRPC = Object.assign({}, openrpc);

for(let i in openrpc.methods) {
  let method = openrpc.methods[i];
  const methodExamples = examples[method.name] || [];

  const mappedExamples = methodExamples.map(example => {
    let resultValue = example.error ? example.error : example.result;
    if (!resultValue) resultValue = null;
    return {
      name: method.name,
      description: '',
      params: [],
      params: example.params.map((value, i) => {
        // Find the param name
        let paramName;
        if (method.params[i].$ref) {
          paramName = findRef(method.params[i].$ref, openrpc).name;
        } else {
          paramName = method.params[i].name;
        }
        return {
          name: paramName,
          value
        }
      }),
      result: {
        name: `${method.name}-Result`,
        value: resultValue
      }
    }
  });
  method.examples = mappedExamples;
}

function findRef($ref, theopenrpc) {
  const paths = $ref.replace('#/', '').split('/');
  return theopenrpc.components[paths[1]][paths[2]];
}

fs.writeFileSync(process.argv[3], JSON.stringify(openrpc, null, 2));