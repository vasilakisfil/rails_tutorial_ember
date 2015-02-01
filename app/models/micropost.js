import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  picture: DS.attr('string'), //we  might change that to pictureUrl

  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),

  user: DS.belongsTo('user', {async: true}),

  pictureUrl: function() {
    return 'http://localhost:3000/' + this.get('picture');
  }.property('picture')
});

