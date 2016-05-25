import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    createSession(session) {
      this.get('session').authenticate(
        'authenticator:devise',
        session.get('identifier'),
        session.get('password')
      ).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    },
    destroySession() {
      this.get('session').invalidate();
    },
  },

  sessionInvalidated() {
    this.transitionTo('index');
    return true;
  }
});
