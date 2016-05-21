import Ember from 'ember';

export function humanize([word]) {
  return word.decamelize().split('_').join(' ').capitalize();
}

export default Ember.Helper.helper(humanize);
