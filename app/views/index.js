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
    var offset = growElement.offset();
    console.log("offset is", offset.top, offset.left);
    growElement.css("position", "fixed");
    growElement.css("top", offset.top);
    growElement.css("left", offset.left);

    console.log("growing element", growElement);
    growElement.animate({
      height:"100%",
      width: "100%",
      top: "0em",
      left: "0em"
    }, 1000, done);
  }
});
