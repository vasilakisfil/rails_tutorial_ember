import Person from './person';

export default Person.extend({
  passwordConfirmation: null,

  valid() {
    if (!this.get('password')) { return true; }

    this.get('errors')._clear();

    if (this.get('password') === this.get('passwordConfirmation')) { return true;}

    this.get('errors')._add('passwordConfirmation', 'is not the same with the password');
    return false;
  }
});
