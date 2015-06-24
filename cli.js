#!/usr/bin/env node

var merge = require('./');
var fs = require('fs');
var path = require('path');

if (!process.argv[2]) {
    var usage = 'Usage: ' + path.basename(process.argv[1]) + ' <source1> [<source2>...]';
    console.error(usage);
    process.exit(1);
}

try {
    var obj = process.argv.splice(2).reduce(function(obj, file) {
        return merge(
            obj,
            JSON.parse(
                fs.readFileSync(file)
            )
        );
    }, {});

    process.stdout.write(
        JSON.stringify(obj) + "\n"
    );
} catch (e) {
    console.error(e);
    process.exit(1);
}
