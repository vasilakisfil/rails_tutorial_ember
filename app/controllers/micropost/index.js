import Ember from 'ember';

export default Ember.ObjectController.extend({
  isAuthor: function() {
    if (this.get('session.id').toString() === this.get('model.user.id').toString()) {
      return true;
    } else { return false; }
  }.property()
});


