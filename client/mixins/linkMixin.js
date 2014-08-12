/**
 * Module dependencies.
 */

var dispatcher = require('../dispatcher/dispatcher');

/**
 * Create a link object.
 *
 * @param {String} class
 * @param {String} url
 * @api private
 */

module.exports = {
  linkMixin: {
    link: function(className, url, ctx) {
      var obj = {};

      function handleClick(url, e) {
        e.preventDefault();
        console.log('clicked', url);
        dispatcher.dispatch('path_update', url);
      }

      obj.className = className;
      obj.href = url;
      obj.onClick = handleClick.bind(ctx, url);
      return obj;
    }
  }
};
