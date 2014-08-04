/**
 * Module dependencies.
 */

var react = require('react');
var dom = react.DOM;

/**
 * Home class.
 */

module.exports = react.createClass({
  displayName: 'title',
  render: render
});

/**
 * Render.
 */

function render() {
  return dom.h1({className: 'gork'}, 'gork a27');
}