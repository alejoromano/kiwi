/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: InstagramAPI', function () {

    // load the service's module
    beforeEach(module('kiwiApp.services.InstagramAPI'));

    // instantiate service
    var InstagramAPI;
    beforeEach(inject(function (_InstagramAPI_) {
      InstagramAPI = _InstagramAPI_;
    }));

    it('should do something', function () {
      expect(!!InstagramAPI).toBe(true);
    });

  });
});
