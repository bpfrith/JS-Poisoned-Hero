var Hero = function(name, health, favFood) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;

  // this.talk = function(){
  //   return 'Behold, I am the great ' + this.name;
  // };

};

  Hero.prototype = {
    consume: function(foodToConsume){
      if (foodToConsume.poison){
        this.health -= 20;
        return this.health
      }
      if(foodToConsume.name === this.favFood){
        this.health += (1.5 * foodToConsume.replenish);
      }else{
        this.health += foodToConsume.replenish
      };
        return this.health
      },
      talk: function(talk){
        return 'Behold, I am the great ' + this.name;
      }
    };

module.exports = Hero;