import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['microposts/index'],

  actions: {
    createMicropost: function() {
      var _this = this;
      this.get('micropost').save().then(function(micropost) {
        _this.get('controllers.microposts/index.model.content').unshiftObject(micropost);
        _this.set('micropost', _this.store.createRecord('micropost', {user: micropost.get('user')}));
      });
    }
  }
});

