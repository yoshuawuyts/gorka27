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
  return dom.div(null,
    dom.header({className: 'initial-header'},
      dom.h1({className: 'logo'}, 'gork a27')
    ),
    dom.header(({className: 'link-header'}),
      dom.a({className: 'tour', href: '/tour'}, 'tour'),
      dom.a({className: 'album', href: '/album'}, 'album')
    )
  );
}
