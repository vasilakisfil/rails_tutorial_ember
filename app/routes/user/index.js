import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin, {
  model: function() {
    return this.modelFor('user');
  },

  perPage: 25,

  afterModel: function(user) {
    var _this = this;
    this.findPaged('micropost', {user_id: user.id}).then(function(microposts) {
      _this.controllerFor('microposts/index').setProperties({
        model: microposts,
        content: microposts 
      });
    });
  },

  renderTemplate: function() {
    this.render('user/index', {});

    this.render('microposts/index', {
      into: 'user/index',
      outlet: 'side-list',
      controller: 'microposts/index'
    });
  }
});
