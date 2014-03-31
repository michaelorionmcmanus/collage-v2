import Resolver from 'ember/resolver';
import soundBoardInitializer from 'collage-v2/initializers/soundboard';

var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  // LOG_TRANSITIONS: true,
  // LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'collage-v2', // TODO: loaded via config
  Resolver: Resolver
});

App.initializer(soundBoardInitializer);


export default App;
