import Ember from 'ember';
import DS from 'ember-data';
import ENV from 'rails-tutorial-ember/config/environment';

export default DS.ActiveModelAdapter.extend({
  namespace: 'api/v1',
  host: ENV.APP.SERVER_URL,

  pathForType: function(type) {
    var decamelized = Ember.String.decamelize(type);
    if (this.plurals()[decamelized]) {
      return this.plurals()[decamelized];
    } else {
      return Ember.String.pluralize(decamelized);
    }
  },

  plurals: function() {
    return {'feed': 'feed'};
  }
});
