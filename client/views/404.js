/**
 * Module dependencies.
 */

var react = require('react');
var notFound = require('../modules/404/404');
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
  return dom.section({className: this.state.load + ' root-section'},
    header(),
    dom.section({className: 'body-section'},
      notFound(),
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
