var Router = Ember.Router.extend({
  location: 'history'
}); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.resource('wads', function() {
    this.route('edit', {path: 'edit/:wad_id'});
  });
});

export default Router;
