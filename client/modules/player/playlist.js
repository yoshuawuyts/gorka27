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
  render: render
});

/**
 * Render.
 */

function render() {
  return dom.section({className: 'section-playlist'},
    songs.map(songBlock)
  );
}

/**
 * Generate a single song block.
 *
 * @param {Object} song
 * @return {ReactClass}
 * @api private
 */

function songBlock(song) {
  return dom.div({className: 'song', key: song.name},
    dom.span({className: 'song-name'}, song.name),
    dom.span({className: 'song-duration'}, song.duration)
  );
}