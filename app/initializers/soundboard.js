import SoundBoard from 'collage-v2/sound-board';

export default {
  name: 'soundboard',
  initialize: function(container, application) {
    application.register('wad:soundboard', SoundBoard, {singleton: true});
    container.injection('controller', 'soundBoard', 'wad:soundboard');
    container.injection('route', 'soundBoard', 'wad:soundboard');
  }
};
