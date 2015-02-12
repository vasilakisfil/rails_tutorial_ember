import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  beforeModel: function(transition) {
    if(transition.targetName === 'login' && this.get('session.isAuthenticated')) {
      this.transitionTo('index');
    } else {
      // Bubble the `willTransition` action so that
      // parent routes can decide whether or not to abort.
      return true;
    }
  },
});

