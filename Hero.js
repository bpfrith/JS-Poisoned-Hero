var Hero = function(name, health, favFood) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;

  this.talk = function(){
    return 'Behold, I am the great ' + this.name;
  };
};

module.exports = Hero;