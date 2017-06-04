import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['header-nav'],

	actions: {
    showHide: function() {
    	this.$('.overlay').slideToggle('slow');
    },
  }
});
