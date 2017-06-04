import Ember from 'ember';

export default Ember.Route.extend({

	activate: function() {
		let self = this;

		document.onkeydown = checkKey;

		function checkKey(e) {

		    e = e || window.event;

		    if (e.keyCode === '37') {
		       self.transitionTo('distraction');
		    }
		    else if (e.keyCode === '39') {
		       self.transitionTo('press');
		    }

		}
	}
});
