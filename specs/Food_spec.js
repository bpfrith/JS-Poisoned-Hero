var assert = require("assert");
var Food = require("../food");

describe("food", function() {

 beforeEach(function(){
  food = new Food("Lasagne", 15);
});

 it("should have a name", function() {
  assert.equal("Lasagne", food.name);
});

 it("should have replenish value", function(){assert.equal(15, food.replenish);
 });
});