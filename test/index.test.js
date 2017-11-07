'use strict';

var Analytics = require('@segment/analytics.js-core').constructor;
var integrationTester = require('@segment/analytics.js-integration-tester');
var integration = require('@segment/analytics.js-integration');
var sandbox = require('@segment/clear-env');
var GoogleAdWordsNew = require('../lib/');

describe('Google AdWords New', function() {
  var analytics;
  var googleadwordsnew;
  var options = {};

  beforeEach(function() {
    analytics = new Analytics();
    googleadwordsnew = new GoogleAdWordsNew(options);
    analytics.use(integrationTester);
    analytics.use(GoogleAdWordsNew);
    analytics.add(googleadwordsnew);
  });

  afterEach(function() {
    analytics.restore();
    analytics.reset();
    googleadwordsnew.reset();
    sandbox();
  });

  it('should have the correct options', function() {
    analytics.compare(GoogleAdWordsNew, integration('Google AdWords New')
    .option('apiKey', '')
    .tag('<script src="">'));
  });

  describe('before loading', function() {
    beforeEach(function() {
      analytics.stub(googleadwordsnew, 'load');
    });

    describe('#initialize', function() {
      // write assertions here if you do any logic to create or set things in the `.initialize()` function

      it('should call load', function() {
        analytics.initialize();
        analytics.called(googleadwordsnew.load);
      });
    });
  });

  describe('loading', function() {
    it('should load', function(done) {
      analytics.load(googleadwordsnew, done);
    });
  });

  describe('after loading', function() {
    beforeEach(function(done) {
      analytics.once('ready', done);
      analytics.initialize();
    });

    // write all your post-load assertions and unit tests here such

    describe('#identify', function() {
    });

    describe('#page', function() {
    });

    describe('#track', function() {
    });

    describe('#group', function() {
    });

    describe('#alias', function() {
    });
  });
});
