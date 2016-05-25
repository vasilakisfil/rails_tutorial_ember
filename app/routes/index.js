import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    if (this.get('session.isAuthenticated')) {
      return Ember.RSVP.hash({
        user: this.store.findRecord(
          'user', this.get('session.data.authenticated.id')
        ),
        userFollowing: this.store.query('following', {
          user_id: this.get('session.data.authenticated.id')
        }),
        userFollowers: this.store.query('follower', {
          user_id: this.get('session.data.authenticated.id'),
        }),
        microposts: this.store.query('feed', {
          user_id: this.get('session.data.authenticated.id')
        }),
        micropost: this.store.createRecord('micropost', {
        })
      });
    }
  },

  actions: {
    createMicropost(micropost) {
      var _this = this;

      this.store.findRecord(
        'user', this.get('session.data.authenticated.id')
      ).then(function(user) {
        micropost.set('user', user);
        micropost.save().then(function(micropost) {
          _this.refresh();
          //_this.lightweightRefresh();
        });
      });
    }
  }

  lightweightRefresh() {
    Ember.set(
      this.modelFor('index'),
      'micropost',
      this.store.createRecord('micropost', {})
    );
    this.modelFor('index').microposts.unshiftObject(micropost._internalModel);
  }
});
