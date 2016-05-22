import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.Object.create({
      identifier: null,
      password: null
    });
  }
});
