/* global window*/

/**
 * Module dependencies.
 */

var react = require('react');
var router = require('../router/router');

/**
 * Render.
 */

react.renderComponent(router(), window.document.querySelector('body'));
