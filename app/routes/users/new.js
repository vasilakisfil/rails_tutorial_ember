import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('user', {});
  },

  actions: {
    createUser(user) {
      if (!user.valid()) { return false; }

      user.save().then(function() {
      });
    }
  }
});
