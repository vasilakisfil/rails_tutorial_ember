import DS from 'ember-data';

export default DS.Model.extend({
  activated: DS.attr('boolean'),
  activated_at: DS.attr('date'),
  admin: DS.attr('boolean'),
  email: DS.attr('string'),
  name: DS.attr('string'),

  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),


  microposts: DS.hasMany('micropost', {async: true}),
  following: DS.hasMany('user', {inverse: 'followers', async: true}),
  followers: DS.hasMany('user', {inverse: 'following', async: true})
});
