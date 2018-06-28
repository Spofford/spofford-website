import Ember from 'ember';

/*
import {createClient} from 'contentful';

const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: '4wgubu2ijtof',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: 'a91d4bc0d6b19ef7bb92c4327fe1d9806b3cc1d49719747650c4f4633d1d459e'
});
*/

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
