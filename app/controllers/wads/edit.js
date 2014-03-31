var WadsCreateController = Ember.ObjectController.extend({
  sources: ['square', 'sawtooth', 'triangle', 'sine'],
  pitches: [],

  init: function() {
    var pitches = this.get('pitches');
    for(var key in Wad.pitches) {
      pitches.push({note: key, freq: Wad.pitches[key]});
    }
  },

  pitchAndNoteObserver: function() {
    var pitchAndNote = this.get('pitchAndNote');
    if(pitchAndNote) {
      this.set('note', pitchAndNote.note);
    }
  }.observes('pitchAndNote'),

});

export default WadsCreateController;
