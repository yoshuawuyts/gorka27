/**
 * Module dependencies.
 */

var react = require('react');
var fs = require('fs');
var logo = fs.readFileSync(__dirname + '/playbutton.svg', 'utf8');
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

  return dom.section({className: 'section-player'},
    dom.audio(audio, 'your browser does shit'),
    dom.div({dangerouslySetInnerHTML: {__html: logo}}),
    dom.div({className: 'player-progress'})
  );
}

/**
 * Component has mounted.
 */

function componentDidMount() {
  //var audio = this.refs.audio.getDOMNode();
}
