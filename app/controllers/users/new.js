import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    createUser: function() {
      this.get('model').save().then(function() {
        this.notify.success('Your account has been created. Please sign in.', {
          closeAfter: 5000
        });
        this.transitionToRoute('index');
      }.bind(this), function() {});
    }
  }
});
