export default Ember.Object.extend({
  wads: [],
  addSound: function(model) {
    var parameters = model.toJSON({includeId: true});
    var newWad = new Wad(parameters);
    this.get('wads').push({id: model.get('id'), sound: newWad});
    return newWad;
  },
  getSound: function(model) {
    var id = model.get('id');
    var wad = this.get('wads').findBy('id', id);
    return wad.sound;
  }
});