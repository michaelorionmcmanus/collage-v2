var WadsIndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.all('wad');
  }
});

export default WadsIndexRoute;
