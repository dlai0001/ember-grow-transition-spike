import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberGrowTransitionSpikeENV.locationType
});

Router.map(function() {
  this.route('subroute1');
});

export default Router;
