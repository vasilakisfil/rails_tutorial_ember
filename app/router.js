import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('help');
  this.route('about');
  this.route('contact');

  this.route('sessions.new', {path: '/login'});
  this.route('users.new', {path: '/signup'});

  this.route('users', function() {
  });
  this.route('user', {path: '/users/:user_id'}, function() {
    this.route('edit');
    this.route('following');
    this.route('followers');
  });
});

export default Router;
