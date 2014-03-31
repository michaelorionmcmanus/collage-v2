var WadsListItemController = Ember.ObjectController.extend({
  soundSource: null,
  sound: function() {
    if(!this.get('soundSource')) {
      this.set('soundSource', this.get('soundBoard').getSound(this.get('model')));
    }
    return this.get('soundSource');
  }.property('soundSource'),

  actions: {
    'edit': function(model) {
      var modelId = model.get('id');
      this.transitionToRoute('wads.edit', modelId);
    },
    'play': function() {
      var sound = this.get('sound');
      var model = this.get('model');
      sound.play(model.toJSON());
    },
    'stop': function() {
      var sound = this.get('sound');
      if(sound.onend) {
        sound.onend = null;
      }
      sound.stop();
    },
    'loop': function() {
      var sound = this.get('sound');
      var model = this.get('model');
      sound.onend = function() {
        this.play(model.toJSON());
      }
      sound.play(model.toJSON());
    }
  }
});

export default WadsListItemController;
