var WadsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('wad');
  }
});

export default WadsRoute;
