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
    dom.div({className: 'footer-link'},
      dom.a({href: 'http://facebook.com/gorka27'}, 'facebook')
    ),
    dom.div({className: 'footer-link'},
      dom.a({href: '/bookings'}, 'bookings')
    ),
    dom.div({className: 'footer-date'}, 'MMXIV')
  );
}
