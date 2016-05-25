import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  email: attr('string'),
  name:  attr('string'),
  password:  attr('string'),

  activated: attr('boolean'),
  activatedAt: attr('date'),
  admin: attr('boolean'),

  created_at: attr('moment'),
  updated_at: attr('moment'),

  passwordConfirmation: null,

  valid() {
    if (!this.get('password')) { return true; }

    this.get('errors')._clear();

    if (this.get('password') === this.get('passwordConfirmation')) { return true;}

    this.get('errors')._add('passwordConfirmation', 'is not the same with the password');
    return false;
  }
});
