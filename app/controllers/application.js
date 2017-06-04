import Ember from 'ember';

const {
  Controller
} = Ember;

export default Controller.extend({
  hideValue: true,
  actions: {
    hide: function() {
      this.toggleProperty('hideValue');
    }
  }
})
