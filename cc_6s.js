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
