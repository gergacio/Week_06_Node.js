const assert = require('assert');
const Dinosaur = require('../models/dinosaur.js');

describe('Dinosaur', function() {

  let dinosaur;

  beforeEach(function () {
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
  });
  //make tests pending!
  
  xit('should have a species', function () {
    const actual = dinosaur.species;
    assert.strictEqual(actual, 't-rex');
  });

  xit('should have a diet', function () {
    const actual = dinosaur.diet;
    assert.strictEqual(actual, 'carnivore');
  });

  xit('should have an average number of visitors it attracts per day', function () {
    const actual = dinosaur.guestsAttractedPerDay;
    assert.strictEqual(actual, 50);
  });

});
