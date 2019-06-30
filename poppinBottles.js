const freeBottles = function(startingBottles) {
  // For every two empty bottles, you can get one free (full) bottle of pop
  let earnedBottles = Math.floor(startingBottles / 2);
  // For every four bottle caps, you can get one free (full) bottle of pop
  earnedBottles += Math.floor(startingBottles / 4);
  return earnedBottles + freeBottles(earnedBottles);
};

const poppinBottles = function(investment) {
  // Each bottle of pop costs $2 to purchase
  // const changeRemaining = investment % 2;
  const bottlesBought = Math.floor(investment / 2);

  // Figure out the algorithm that will calculate this. 
  // For example, given a $20 investment, the customer will get 10 bottles of pop. 
  // That gives a supply of both bottles and bottle caps that can be used to redeem for further bottles, 
  // which will then produce a further supply for recycling.
  return freeBottles(bottlesBought);
};

module.exports = poppinBottles;