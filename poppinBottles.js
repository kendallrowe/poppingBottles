const investment = process.argv;


const freeBottles = function(emptyBottles, caps) {
  // For every two empty bottles, you can get one free (full) bottle of pop
  let earnedBottles = Math.floor(emptyBottles / 2);
  emptyBottles -= earnedBottles * 2;
  // For every four bottle caps, you can get one free (full) bottle of pop
  earnedBottles += Math.floor(caps / 4);
  caps -= Math.floor(caps / 4) * 4;
  
  emptyBottles += earnedBottles;
  caps += earnedBottles;

  if (earnedBottles === 0) {
    return 0;
  } else {
    return earnedBottles + freeBottles(emptyBottles, caps);
  }
};

const poppinBottles = function(investment) {
  // Each bottle of pop costs $2 to purchase
  // const changeRemaining = investment % 2;
  const bottlesBought = Math.floor(investment / 2);

  return bottlesBought + freeBottles(bottlesBought, bottlesBought);
};

console.log(poppinBottles(parseInt(investment.slice(2), 10)));

module.exports = poppinBottles;