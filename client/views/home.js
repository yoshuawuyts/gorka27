/**
 * Module dependencies.
 */

var react = require('react');
var playlist = require('../modules/player/playlist');
var player = require('../modules/player/player');
var header = require('../modules/header/header');
var footer = require('../modules/footer/footer');
var store = require('../stores/store');
var pathStore = store.loaded;
var dom = react.DOM;

/**
 * Home class.
 */

module.exports = react.createClass({
  displayName: 'home',
  getInitialState: getInitialState,
  render: render,
  componentDidMount: componentDidMount
});

/**
 * Get initial state.
 */

function getInitialState() {
  if (!pathStore.get(0).loaded) return {load: 'created'};
  return {load: 'started'};
}
/**
 * Render.
 */

function render() {
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
  if (!pathStore.get(0).loaded) {
    setTimeout(this.setState.bind(this, {load: 'loading'}), 1500);
    setTimeout(this.setState.bind(this, {load: 'started'}), 3000);
  }
  pathStore.update({cid: 0, loaded: true});
}
