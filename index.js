var merge = require('lodash.merge');
var isArray = require('lodash.isarray');

module.exports = function(object, fragment) {
    return merge(object, fragment, function(a, b) {
        if (isArray(a)) {
            return a.concat(b);
        }
    })
};
