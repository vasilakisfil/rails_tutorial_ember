export default Ember.Route.extend({
  model() {
    return this.store.createRecord('user', {});
  },

  actions: {
    createUser(user) {
      var _this = this;
      Ember.Logger.debug(user);
      user.save().then(
        function() {
          Ember.Logger.debug('foo');
        }, function(foo) {
         Ember.Logger.debug(foo);
         Ember.Logger.debug(_this.controllerFor('users.new').get('model.errors.email'));
        }
      );
    }
  }
});
