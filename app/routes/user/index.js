import Ember from 'ember';

export default Ember.Route.extend({
  notify: Ember.inject.service('notify'),

  model() {
    return this.modelFor('user');
  },

  setupController(controller, model) {
    this._super(controller, model);
    this.store.query('follower', {
      user_id: this.get('session.data.authenticated.id'),
      follower_id: model.user.id,
      per_page: 1
    }).then(function(follower) {
      if (follower.get('length') > 0) {
        controller.set('isFollower', true);
      } else {
        controller.set('isFollower', false);
      }
    });
  },

  actions: {
    followUser: function(user) {
      var _this = this;

      this.get('store').adapterFor('application').ajax(
        this.get('store').adapterFor('user').buildURL(
          'user', this.get('session.data.authenticated.id')
        ) + '/followers/' + user.id,
        "POST",
        {}
      ).then(function() {
        _this.controllerFor('user.index').set('isFollower', true);
      });
    },

    unfollowUser: function(user) {
      var _this = this;

      this.get('store').adapterFor('application').ajax(
        this.get('store').adapterFor('user').buildURL(
          'user', this.get('session.data.authenticated.id')
        ) + '/followers/' + user.id,
        "DELETE",
        {}
      ).then(function() {
        _this.controllerFor('user.index').set('isFollower', false);
      });
    }
  }
});


