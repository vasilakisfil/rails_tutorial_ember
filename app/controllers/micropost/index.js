import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['microposts/index'],

  isAuthor: function() {
    if (this.get('session.id').toString() === this.get('model.user.id').toString()) {
      return true;
    } else { return false; }
  }.property(),

  actions: {
    deleteMicropost: function() {
      this.get('controllers.microposts/index.model.content').shiftObject(this.get('model'));
      this.get('model').destroyRecord();
    }
  }
});


