const investment = process.argv;


const freeBottles = function(recyclingAndRewards) {
  // For every two empty bottles, you can get one free (full) bottle of pop
  let earnedBottles = Math.floor(recyclingAndRewards.emptyBottles / 2);
  recyclingAndRewards.emptyBottles -= earnedBottles * 2;
  // For every four bottle caps, you can get one free (full) bottle of pop
  earnedBottles += Math.floor(recyclingAndRewards.caps / 4);
  recyclingAndRewards.caps -= Math.floor(recyclingAndRewards.caps / 4) * 4;
  
  recyclingAndRewards.emptyBottles += earnedBottles;
  recyclingAndRewards.caps += earnedBottles;

  if (earnedBottles !== 0) {
    recyclingAndRewards.totalEarnedBottles += earnedBottles
    recyclingAndRewards = freeBottles(recyclingAndRewards);
  }
  return recyclingAndRewards
};

const poppinBottles = function(investment) {
  // Each bottle of pop costs $2 to purchase
  // const changeRemaining = investment % 2;
  let recyclingAndRewards = {};
  recyclingAndRewards.bottlesBought = Math.floor(investment / 2);
  recyclingAndRewards.emptyBottles = recyclingAndRewards.bottlesBought;
  recyclingAndRewards.caps = recyclingAndRewards.bottlesBought;
  recyclingAndRewards.totalEarnedBottles = 0;

  recyclingAndRewards = freeBottles(recyclingAndRewards);
  return recyclingAndRewards.bottlesBought + recyclingAndRewards.totalEarnedBottles;
};

// console.log(poppinBottles(parseInt(investment.slice(2), 10)));

module.exports = poppinBottles;