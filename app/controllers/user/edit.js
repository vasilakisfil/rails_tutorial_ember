import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    updateUser: function() {
      this.get('model').save().then(function() {
        this.notify.success('Profile updated');

        //some custom logic cause response doesn't return any password/passwordConfirmation
        //and ember merges these data with the response
        this.set('model.password', null);
        this.set('model.passwordConfirmation', null);
      }.bind(this), function() {});
    }
  }
});
