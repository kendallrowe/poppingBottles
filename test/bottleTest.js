const chai = require('chai'); // 1
const assert = chai.assert;

const poppinBottles = require('../poppinBottles.js'); // 2

describe("#poppinBottles()", function() { // 3

  it("investment of 10 should return 15 bottles", function() { // 4
    const investment = 10;
    const popped = poppinBottles(investment);
    assert.strictEqual(popped, 15);
  });

  it("investment of 20 should return 35 bottles", function() { // 4
    const investment = 20;
    const popped = poppinBottles(investment);
    assert.strictEqual(popped, 35);
  });

  it("investment of 30 should return 55 bottles", function() { // 4
    const investment = 30;
    const popped = poppinBottles(investment);
    assert.strictEqual(popped, 55);
  });

  it("investment of 40 should return 75 bottles", function() { // 4
    const investment = 40;
    const popped = poppinBottles(investment);
    assert.strictEqual(popped, 75);
  });

});