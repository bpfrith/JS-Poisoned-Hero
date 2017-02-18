var assert = require("assert");
var Hero = require("../Hero");
var Food = require("../Food");
var Rat = require("../Rat");

describe("hero", function() {

  beforeEach(function(){
   sean = new Hero("Sir Sean of Literature", 80, "Lasagne");
   chianti = new Food("Chianti", 5);
   lasagne = new Food("Lasagne", 20);
   lab = new Rat("lab","poison");
 });

  it("should have a name", function(){
    assert.equal("Sir Sean of Literature", sean.name);
  });

  it("should have health", function (){
    assert.equal(80, sean.health);
  });

  it("should have a favourite food", function(){
    assert.equal("Lasagne", sean.favFood)
  });

  it("should talk", function() {
    assert.equal("Behold, I am the great Sir Sean of Literature", sean.talk());
  });

  it('should be able to consume food', function(){
    assert.equal(85, sean.consume(chianti));
  });
  it('health should go up by 1.5 * value, If the food is their favourite food.', function(){
    assert.equal(110, sean.consume(lasagne))
  });
  it('should lose health, if it eats poisoned food', function(){
    lab.touch(lasagne)
    assert.equal(60, sean.consume(lasagne))
  });
});