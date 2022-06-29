const fs = require('fs');
[, , fileSeed, fileOut] = process.argv

function main() {
    const seed = require(fileSeed)
    const out = {
        "version": "0.0.5",
        "examples": {}
    }
    for (let method in seed) {
        out.examples[method] = seed[method].reduce((sum, c, i) => {
            sum.push({
                name: `${method}_${i}`,
                params: c.params
            })
            return sum
        }, [])
    }

    fs.writeFileSync(fileOut, JSON.stringify(out))
}

main()




