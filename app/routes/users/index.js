import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend( {
  model(params) {
    return this.findPaged('user', params);
  }
});

