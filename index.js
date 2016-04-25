var mergeWith = require('lodash.mergewith');
var isArray = require('lodash.isarray');

module.exports = function(object, fragment) {
    return mergeWith(object, fragment, function(a, b) {
        if (isArray(a)) {
            return a.concat(b);
        }
    })
};
