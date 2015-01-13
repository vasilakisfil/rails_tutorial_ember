import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin, {
  model: function() {
    this.controllerFor('user/index').setProperties({
      model: this.modelFor('user'),
      gravatarUsers: this.modelFor('user').get('followings')
    });
  },

  perPage: 25,

  afterModel: function() {
    var _this = this;
    this.findPaged('user', {
      following_id: this.modelFor('user').id
    }).then(function(followers) {
      Ember.Logger.debug(followers);
      _this.controllerFor('user/following').setProperties({
        model: followers,
        content: followers 
      });
    });
  },


  renderTemplate: function() {
    this.render('user/index', {});

    this.render('user/following', {
      into: 'user/index',
      outlet: 'side-list',
      controller: 'user/following'
    });
  }
});
