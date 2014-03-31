var WadsCreateRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.getById('wad', params.wad_id);
  }
});

export default WadsCreateRoute;
