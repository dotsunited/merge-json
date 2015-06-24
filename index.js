var _ = require('lodash');

module.exports = function(object, fragment) {
    return _.merge(object, fragment, function(a, b) {
        if (_.isArray(a)) {
            return a.concat(b);
        }
    })
};
