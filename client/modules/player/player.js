/**
 * Module dependencies.
 */

var react = require('react');
var songs = require('../../../content/songs.json');
var dom = react.DOM;

/**
 * Playlist.
 */

module.exports = react.createClass({
  displayName: 'playlist',
  render: render,
  componentDidMount: componentDidMount
});

/**
 * Render.
 */

function render() {

  var audio = {
    className: 'player',
    ref: 'audio',
    src: 'http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg'
  };

  var svg = {
    className: 'player-play', 
    xmlns: 'http://www.w3.org/2000/svg', 
    viewBox: '0 0 64 64'
  };

  return dom.section({className: 'section-player'},
    dom.audio(audio, 'your browser does shit'),
    dom.svg(svg,
      dom.circle({cx: 32, cy: 32, r: 32}),
      dom.path({x: 16, y: 16, d: 'M0 0 L32 16 L0 32 z'})
    ),
    dom.div({className: 'player-progress'})
  );
}

/**
 * Component has mounted.
 */

function componentDidMount() {
  var audio = this.refs.audio.getDOMNode();
}