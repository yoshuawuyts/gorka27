/**
 * Module dependencies.
 */

var store = require('dad');
var path = store('loaded');

/**
 * Exports.
 */

module.exports = path;

/**
 * Set properties.
 */

path.schema({
  loaded: {required: true}
});

path.add({loaded: false});
