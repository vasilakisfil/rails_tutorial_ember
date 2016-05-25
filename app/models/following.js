import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  email: attr('string'),
  name:  attr('string'),
  password:  attr('string'),

  activated: attr('boolean'),
  activatedAt: attr('date'),
  admin: attr('boolean'),

  created_at: attr('moment'),
  updated_at: attr('moment')
});
