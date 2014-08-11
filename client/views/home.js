/**
 * Module dependencies.
 */

var react = require('react');
var playlist = require('../modules/player/playlist');
var player = require('../modules/player/player');
var header = require('../modules/header/header');
var footer = require('../modules/footer/footer');
var dom = react.DOM;

/**
 * Home class.
 */

module.exports = react.createClass({
  displayName: 'home',
  componentWillMount: componentWillMount,
  render: render,
  componentDidMount: componentDidMount
});

/**
 * Component will mount.
 */

function componentWillMount() {
  this.setState({load: 'loading'});
}

/**
 * Render.
 */

function render() {
  console.log(this.state);
  return dom.section({className: this.state.load + ' root-section'},
    header(),
    dom.section({className: 'body-section'},
      player(),
      playlist(),
      footer()
    )
  );
}

/**
 * Component did mount.
 */

function componentDidMount() {
  setTimeout(this.setState.bind(this, {load: 'loaded'}), 1500);
}
