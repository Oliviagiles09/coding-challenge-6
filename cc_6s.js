// Task 1 

function calculateProfit(costPrice, sellingPrice, unitsSold) {
  let profit = (sellingPrice - costPrice) * unitsSold;
  return profit;

};

calculateProfit(20, 30, 100);
calculateProfit(50, 70, 200);

consol.log("Total Profit: $", calculateProfit(20, 30, 100));
consol.log("Total Profit: $", calculateProfit(50, 70, 200));

// Task 2

let calculateSalesTax = function(amount, taxRate) {
  let salesTax =Math.floor(amount * taxRate);
  return salesTax;
};

consol.log("Sales Tax: $", calculateSalesTax(100, 0.07));
consol.log("Sales Tax: $", calculateSalesTax(500, 0.1));

// Task 3

const calculateBonus = (salary, performanceRating) => {
  let bonus = 0;

  if(performanceRating === "Excellent") {
    bonus = salary * 0.20;
  } else if (performanceRating === "Good") {
    bonus = salary * 0.10;
  } else if (performanceRating === "Average") {
    bonus = salary * 0.05;
  }

  consol.log('Bonus: $${bonus}');
};

calculateBonus(5000, "Excellent");
calculateBonus(7000, "Good");

// Task 4 

const calculateSubscriptionCost = (plan, months, discount = 0) => {
  let rate;
  if (plan === "Basic") {
    rate = 10;
  } else if (plan === "Premium") {
    rate = 20;
  } else if (plan === "Enterprise") {
    rate = 50;
  } else {
    consol.log("Invalid Plan.");
  }
  let totalCost = rate * months;

  if (discount > 0) {
    totalCost -= (totalCost * discount) / 100;
  }

  consol.log('Total Cost: $${totalCost}');
};

calculateSubscriptionCost("Basic", 6,10);
calculateSubscriptionCost("Premium", 12, 0);
