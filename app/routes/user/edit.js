import Ember from 'ember';

export default Ember.Route.extend({
  notify: Ember.inject.service('notify'),

  model(params) {
    return this.modelFor('user').get('user');
  },

  actions: {
    updateUser(user) {
      var _this = this;
      if (!user.valid()) { return false; }

      user.save().then(function() {
        user.setProperties({
          'password': null,
          'passwordConfirmation': null
        });
        _this.get('notify').success('User saved!');
      });
    }
  }
});

