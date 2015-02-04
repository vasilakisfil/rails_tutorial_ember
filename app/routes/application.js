import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    sessionAuthenticationSucceeded: function() {
      Ember.Logger.debug('application route');
    },

    sessionAuthenticationFailed: function() {
      this.controllerFor('login').set('loginError', true);
    }
  }
});

