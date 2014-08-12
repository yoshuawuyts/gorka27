/**
 * Module dependencies.
 */

var react = require('react');
var dom = react.DOM;
var linkMixin = require('../../mixins/linkMixin');

/**
 * Header.
 */

module.exports = react.createClass({
  mixins: [linkMixin],
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
      dom.a(this.linkMixin.link('tour', 'tour', this), 'tour'),
      dom.a(this.linkMixin.link('album', 'album', this), 'album')
    )
  );
}
