import {
  test,
  moduleFor
} from 'ember-qunit';
import Index from 'collage-v2/routes/index';

moduleFor('route:index', "Unit - IndexRoute");

test("it exists", function(){
  ok(this.subject() instanceof Index);
});

test("#model", function(){
  deepEqual(this.subject().model(), [
    'red',
    'yellow',
    'blue'
  ]);
});
