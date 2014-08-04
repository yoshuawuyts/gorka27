/**
 * Module dependencies.
 */

var react = require('react');
var playlist = require('../modules/player/playlist');
var player = require('../modules/player/player');
var header = require('../modules/header/header');
var footer = require('../modules/footer/footer');
var title = require('../modules/title/title');
var dom = react.DOM;

/**
 * Home class.
 */

module.exports = react.createClass({
  displayName: 'home',
  render: render
});

/**
 * Render.
 */

function render() {
  return dom.section({className: 'root-section'}, 
    header(),
    dom.section({className: 'body-section'},
      title(),
      player(),
      playlist(),
      footer()
    )
  );
}