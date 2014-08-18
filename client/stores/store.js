/**
 * Module dependencies.
 */

var loaded = require('./loaded');
var path = require('./path');

/**
 * Create a store facade object.
 */

module.exports = {
  path: path,
  loaded: loaded
};
