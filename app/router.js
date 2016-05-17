import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('help');
  this.route('login');
  this.route('about');
  this.route('contact');

  this.route('users.new', {path: '/signup'});
});

export default Router;
