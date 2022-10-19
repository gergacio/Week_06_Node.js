const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  //declare with let (can be changed, also block scope)
  let park;
  let dinosour1;

  beforeEach(function () {
    //define objects
    //Arange
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    //more dinos
    dinosaur2 = new Dinosaur('sauropods', 'vegi', 10);

    park = new Park('Alton Towers', 20);

  })

  it('should have a name', function () {
    //Act
    const actual = park.name;
    const expected = "Alton Towers";
    //Assert
    assert.strictEqual(actual, expected);
  });

  it('should have a ticket price', function () {
     //Act
     const actual = park.ticketPrice;
     const expected = 20;
     //Assert
     assert.strictEqual(actual, expected);
  });

  it('should have a collection of dinosaurs', function () {
       //Act
       //get dinosaurs property
       const actual = park.dinosaurs; 
       //expect to be empty array(no dino yet)
       const expected = [];
       //Assert
       assert.deepStrictEqual(actual, expected);
  });

  it('should be able to add a dinosaur to its collection', function () {
       //Arrange - push dino into collection
       park.addDinosaurs(dinosour1);
     
       //Act
       //get dinosaurs property
       const actual = park.dinosaurs; 
       //expect to have one dinosaur into the collection
       const expected = [dinosour1];
       //Assert
       assert.deepStrictEqual(actual, expected);
  });

  it('should be able to remove a dinosaur from collection', function () {
       //Arrange - invoke remove func
       park.removeDinosaurs(dinosour1)
       //Act
       //get dinosaurs property
       const actual = park.dinosaurs; 
       //expect to be empty array(no dino yet)
       const expected = [];
       //Assert
       assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
         //Arrange - add dinos into collection
         park.addDinosaurs(dinosour1);
         park.addDinosaurs(dinosaur2);

        
         //Act
         //
         const actual =  park.findMostAtractiveDino();
         //expect to be empty array(no dino yet)
         const expected = dinosour1;
         //Assert
         assert.deepStrictEqual(actual, expected);

  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
