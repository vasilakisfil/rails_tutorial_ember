import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin, {
  model: function() {
    return {};
  },

  setupController: function(controller, model) {
    var _this = this;
    controller.set('model', model);
    //this part will be replaced with the user saved in the session
    this.store.find('user', 1).then(function(user) {
      controller.set('user', user);
      controller.set(
        'micropost',
        _this.store.createRecord('micropost', {user: user}));
    });
  },

  perPage: 30,

  afterModel: function(user) {
    var _this = this;
    this.findPaged('micropost', {user_id: 1}).then(function(microposts) {
      _this.controllerFor('microposts/index').setProperties({
        model: microposts,
        content: microposts
      });
    });
    /*
    this.store.find('micropost', {user_id: 1}).then(function(microposts) {
      _this.controllerFor('microposts/index').setProperties({
        model: microposts,
        content: microposts
      });
    });
    */
  },

  renderTemplate: function() {
    this.render('index', {});

    this.render('microposts/feed', {
      into: 'index',
      outlet: 'side-list',
      controller: 'microposts/index'
    });
  }
});
