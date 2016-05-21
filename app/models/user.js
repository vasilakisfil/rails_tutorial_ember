import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  email: attr('string'),
  name:  attr('string'),
  password:  attr('string'),

  passwordConfirmation: null,

  valid() {
    this.get('errors')._clear();

    if (this.get('password') === this.get('passwordConfirmation')) { return true;}

    this.get('errors')._add('passwordConfirmation', 'is not the same with the password');
    return false;
  }
});
