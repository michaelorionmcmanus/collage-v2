var WadsIndexController = Ember.ArrayController.extend({
  actions: {
    'new' : function() {
      debugger;
      var wad = this.store.createRecord('wad', {
        source: 'sine',
        volume: 0,
        pitch: 0,
        note: 'A0',
      });

      this.get('soundBoard').addSound(wad);
      this.transitionToRoute('wads.edit', wad.get('id'));
    }
  }
});

export default WadsIndexController;
