import Ember from 'ember';
import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  namespace: 'api/v1',
  host: 'http://localhost:3000',

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
