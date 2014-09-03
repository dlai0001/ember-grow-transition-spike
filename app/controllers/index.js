import Ember from 'ember';

export default Ember.Controller.extend({
  needs:['application'],
  actions: {
    openSubpage1: function(elementToGrow){
      console.log("controller opensubpage1", elementToGrow);

      this.set('elementToGrow', elementToGrow);

      this.transitionToRoute('subroute1');
    }
  }
});
