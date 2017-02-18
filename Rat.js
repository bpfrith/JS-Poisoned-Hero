var Rat = function(name, poison){
  this.name = name;
  this.poison = poison;
};

Rat.prototype = {
  touch: function(food){
    if(this.poison === "semi-poison"){
     food.tarnish()
    }else{
     food.poisoned()
    }
  }
}

module.exports = Rat;