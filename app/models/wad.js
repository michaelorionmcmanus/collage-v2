export default DS.Model.extend({
  source: DS.attr('string', {defaultValue: 'sine'}),
  pitch: DS.attr('string'),
  volume: DS.attr('number'),
  panning: DS.attr('number', {defaultValue: 0}),
  type: DS.attr('string'),
  note: DS.attr('string')
});