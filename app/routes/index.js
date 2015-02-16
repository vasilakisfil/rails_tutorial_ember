import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin, {
  model: function() {
    return {};
  },

  setupController: function(controller, model) {
    var _this = this;
    controller.set('model', model);
    if (this.get('session.isAuthenticated')) {
      //this part will be replaced with the user saved in the session
      this.store.find('user', this.get('session.id')).then(function(user) {
        controller.set('user', user);
        controller.set(
          'micropost',
          _this.store.createRecord('micropost', {user: user}));
      });
    }
  },

  perPage: 30,

  afterModel: function() {
    var _this = this;
    if (this.get('session.isAuthenticated')) {
      this.findPaged('micropost', {user_id: this.get('session.id'), feed: true}).then(function(microposts) {
        _this.controllerFor('microposts/index').setProperties({
          model: microposts,
          content: microposts
        });
      });
    }
  },

  renderTemplate: function() {
    this.render('index', {});

    if (this.get('session.isAuthenticated')) {
      this.render('microposts/feed', {
        into: 'index',
        outlet: 'side-list',
        controller: 'microposts/index'
      });
    }
  }
});
