/**
 * Module dependencies.
 */

var react = require('react');
var dom = react.DOM;

/**
 * Footer
 */

module.exports = react.createClass({
  displayName: 'footer',
  render: render
});

/**
 * Render
 */

function render() {
  return dom.section({className: 'footer'},
    dom.a(null, 'facebook'),
    dom.a(null, 'bookings')
  )
}