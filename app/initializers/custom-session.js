import Ember from 'ember';
import Session from 'simple-auth/session';

export function initialize(container) {
  Session.reopen({
    setCurrentUser: function() {
      var id = this.get('id');
      var _this = this;

      if (!Ember.isEmpty(id)) {
        return container.lookup('store:main').find('user', id)
          .then(function(user) {
            _this.set('currentUser', user);
          });
      }
    }.observes('id')
  });
}

export default {
  name: 'custom-session',
  before: 'simple-auth',
  initialize: initialize
};
