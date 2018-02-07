import Ember from 'ember';
import {createClient} from 'contentful';

const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN
});

export default Ember.Component.extend({
	classNames: ['header-nav'],
	about: false,
	error: false,
	didInsertElement: function() {
		console.log('heard');
	},

	actions: {
    showHideAbout: function() {
			this.set('about', true);
    	this.$('.overlay').slideToggle('slow');
    },
		showHideLogin: function() {
			this.set('about', false);
    	this.$('.overlay').slideToggle('slow');
    },
		close: function() {
			this.$('.overlay').slideToggle('slow');
			this.set('error', false);
		},
		toggleError: function() {
			this.toggleProperty('error');
		}
  }
});
