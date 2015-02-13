import Ember from 'ember';

export default Ember.ObjectController.extend({
  isCurrentUser: function() {
    if (this.get('session.currentUser.id') === this.get('model.id')) { return true; }
  }.property('model.id'),

  isFollower: function() {
    if (this.get('session.currentUser.followings').findBy('id', this.get('model.id'))) {
      this.set('isFollower', true);
    } else {
      this.set('isFollower', false);
    }
  }.property(),

  isFollowerObserver: function() {
    if (this.get('session.currentUser.followings').findBy('id', this.get('model.id'))) {
      this.set('isFollower', true);
    } else {
      this.set('isFollower', false);
    }
  }.observes('session.currentUser.followers'),


  actions: {
    followUser: function() {
      var _this = this;

      this._adapter().ajax(this._followingUrl(), 'POST').then(function() {
        _this.set('isFollower', true);
        _this.get('model.followers').pushObject(_this.get('session.currentUser'));
      });

    },

    unfollowUser: function() {
      var _this = this;

      this._adapter().ajax(this._followingUrl(), 'DELETE').then(function() {
        _this.set('isFollower', false);
        _this.get('model.followers').removeObject(_this.get('session.currentUser'));
      });
    }
  },

  _followingUrl: function() {
    var followingUrl = '/links/following/' + this.get('model.id');
    return this._adapter().buildURL('user', this.get('session.id')) + followingUrl;
  },

  _adapter: function() {
    return this.get('store').adapterFor('application');
  }
});

