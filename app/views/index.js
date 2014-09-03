import Ember from 'ember';

export default Ember.View.extend({
  actions: {
    openSubpage1: function(){
      console.log("view opensubpage1");
      this.get('controller').send('openSubpage1', this.$("#subpage1"));
    }
  },


  willAnimateIn : function () {
    this.$().css("opacity", 0);
  },

  animateIn : function (done) {
    this.$().fadeTo(500, 1, done);
//      done();
  },

  animateOut : function (done) {
    console.log("animateout called");
//    this.$().fadeTo(500, 0, done);
      var growElement = this.get('controller').get('elementToGrow');
      growElement.css("position", "fixed");
      console.log("growing element", growElement);
      growElement.animate({
        height: "100%",
        width: "100%"
      }, 1000, done);
  }
});
