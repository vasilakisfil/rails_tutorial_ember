import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(RouteMixin, AuthenticatedRouteMixin, {
  model: function() {
    return this.modelFor('user');
  }
});

