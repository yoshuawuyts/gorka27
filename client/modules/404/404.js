/**
 * Module dependencies.
 */

var react = require('react');
var dom = react.DOM;

/**
 * Playlist.
 */

module.exports = react.createClass({
  displayName: 'notFound',
  render: render
});

/**
 * Render.
 */

function render() {
  return dom.h1({className:'notFound'}, '404: page not Found');
}
