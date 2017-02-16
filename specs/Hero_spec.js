var assert = require("assert");
var Hero = require("../Hero");

describe("hero", function() {

  beforeEach(function(){
   sean = new Hero("Sir Sean of Literature", 80, "Lasagne");
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
});