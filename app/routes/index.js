import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    if (this.get('session.isAuthenticated')) {
      return this.store.findRecord('user', this.get('session.data.authenticated.id'));
    } else {
      return this._super();
    }
  }
});
