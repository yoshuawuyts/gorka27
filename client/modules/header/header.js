/**
 * Module dependencies.
 */

var react = require('react');
var dom = react.DOM;

/**
 * Header.
 */

module.exports = react.createClass({
  displayName: 'header',
  render: render
});

/**
 * Render.
 */

function render() {
  return dom.header({className: 'header'},
    dom.a({className: 'tour'}, 'tour'),
    dom.a({className: 'album'}, 'album')
  );
}