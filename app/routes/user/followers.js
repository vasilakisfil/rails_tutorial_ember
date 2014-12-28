import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin, {
  model: function() {
    this.controllerFor('user/index').setProperties({
      model: this.modelFor('user'),
      gravatarUsers: this.modelFor('user').get('followers')
    });
  },

  perPage: 25,

  afterModel: function() {
    var _this = this;
    this.findPaged('follower', {
      user_id: this.modelFor('user').id
    }).then(function(followers) {
      Ember.Logger.debug(followers);
      _this.controllerFor('user/followers').setProperties({
        model: followers,
        content: followers 
      });
    });
  },


  renderTemplate: function() {
    this.render('user/index', {});

    this.render('user/followers', {
      into: 'user/index',
      outlet: 'side-list',
      controller: 'user/followers'
    });
  }
});
