import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['header-nav'],
	about: false,
	error: false,

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
