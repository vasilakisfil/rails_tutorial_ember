import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    if (this.get('session.isAuthenticated')) {
      return this.store.findRecord('user', this.get('session.data.authenticated.id'));
    }
  },

  setupController(controller, model) {
    this._super(controller, model);
    if (this.get('session.isAuthenticated')) {
      this.store.findAll('micropost').then(function(microposts) {
        controller.set('feed', microposts);
      });
    }
  }
});
