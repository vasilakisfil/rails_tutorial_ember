import Ember from 'ember';

export default Ember.Component.extend({
  isCurrentUser: function() {
    if (this.get('session.data.authenticated.id').toString() === this.get('model.id')) {
      return true;
    } else {
      return false;
    }
  }.property('model.id'),
});
