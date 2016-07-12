var mergeWith = require('lodash.mergewith');
var isArray = require('lodash.isarray');
var uniqWith = require('lodash.uniqwith');
var isEqual = require('lodash.isequal');

module.exports = function(object, fragment) {
    return mergeWith(object, fragment, function(a, b) {
        if (isArray(a)) {
            return uniqWith(
                a.concat(b),
                isEqual
            );
        }
    })
};
