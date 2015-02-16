import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  deactivate: function() {
    this.controllerFor('login').set('loginError', false);
  },
  actions: {
    sessionAuthenticationSucceeded: function() {
      this.transitionTo('index');
    },
    sessionAuthenticationFailed: function() {
      this.controllerFor('login').set('loginError', true);
    }
  }
});


