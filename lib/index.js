'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');

/**
 * Expose `GoogleAdWordsNew` integration.
 */

var GoogleAdWordsNew = module.exports = integration('Google AdWords New')
  .option('apiKey', '')
  .tag('<script src="">');

/**
 * Initialize.
 *
 * @api public
 */

GoogleAdWordsNew.prototype.initialize = function() {
  // put your initialization logic here

  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api public
 * @return {boolean}
 */

GoogleAdWordsNew.prototype.loaded = function() {
  // what are required properties or functions that you need available on the `window`
  // before the integration marks itself as ready?
  return true;
};

/**
 * Page
 *
 * @api public
 */

GoogleAdWordsNew.prototype.page = function(page) {
  // send pageview data
};

/**
 * Identify
 *
 * @api public
 */

GoogleAdWordsNew.prototype.identify = function(identify) {
  // send user data
};

/**
 * Track
 *
 * @api public
 */

GoogleAdWordsNew.prototype.track = function(track) {
  // send event data
};
