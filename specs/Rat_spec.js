var assert = require("assert");
var Rat = require('../rat');
var Food = require('../food');

 describe('Rat', function() {

   beforeEach(function(){
      rolland = new Rat("Rolland Rat", "semi-poison");
      lab = new Rat("lab", "poison");
      fish = new Food("fish", 10);
      cheese = new Food("cheese", 10);
   });

  it('it should have a name', function () {
     assert.equal("Rolland Rat", rolland.name);
  });

  it('it should have poison', function () {
     assert.equal("semi-poison", rolland.poison);
  });

  it('it should be able to tarnish the food', function () {
    rolland.touch(fish)
     assert.equal(5, fish.replenish);
  });

  it('it should be not be able to defile food unless it has the power of defile', function () {
    lab.touch(cheese)
     assert.equal(10, cheese.replenish);
  });

})