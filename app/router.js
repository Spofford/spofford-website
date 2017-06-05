import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  //this.route('co-op');
  //this.route('designers');
  //this.route('manufacturing');
  // this.route('workshop', { path: '/workshop' });
  this.route('signup');
});

export default Router;
