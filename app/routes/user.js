import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      user: this.store.findRecord('user', params.user_id),
      userFollowing: this.store.query('following', {
        user_id: params.user_id
      }),
      userFollowers: this.store.query('follower', {
        user_id: params.user_id,
      }),
      microposts: this.store.query('micropost', {
        user_id: params.user_id
      })
    });
  }
});
