import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('help');
  this.route('about');
  this.route('contact');
  this.resource('users', function() {
    this.resource('user', { path: ':user_id'}, function() {
      this.route('followers');
      this.route('following');
    });
  });
});

export default Router;
