import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  content: attr('string'),
  picture: attr('string'), //we  might change that to pictureUrl

  createdAt: attr('moment'),
  updatedAt: attr('moment'),

  user: belongsTo('user', {async: true}),

  pictureUrl: function() {
    return 'http://localhost:3000/' + this.get('picture');
  }.property('picture')
});
