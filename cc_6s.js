// Task 1 

function calculateProfit(costPrice, sellingPrice, unitsSold) {
  let profit = (sellingPrice - costPrice) * unitsSold;
  return profit;

};

calculateProfit(20, 30, 100);
calculateProfit(50, 70, 200);

consol.log("Total Profit: $", calculateProfit(20, 30, 100));
consol.log("Total Profit: $", calculateProfit(50, 70, 200));
