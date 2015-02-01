/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'rails-tutorial-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    'simple-auth': {
      authorizer: 'simple-auth-authorizer:devise',
      crossOriginWhitelist: ['*']
    },
    'simple-auth-devise': {
      serverTokenEndpoint: 'http://localhost:3000/api/v1/sessions',
      tokenAttributeName: 'token'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.contentSecurityPolicy = {
        'connect-src': "'self'  'unsafe-eval' http://*:3000",
        'style-src': "'self'",
        'script-src': "'self'  'unsafe-eval' http://*:3000",
        'img-src': "'self' https://www.gravatar.com http://www.gravatar.com http://*:3000",
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';

  }

  if (environment === 'production') {

    ENV['simple-auth-devise'] = {
      serverTokenEndpoint: 'api/v1/sessions'
    }
  }

  return ENV;
};
