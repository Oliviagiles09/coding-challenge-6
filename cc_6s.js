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

// Task 5 
let convertCurrency = function(amount, exchangeRate) {
  let convertedAmount= (amount * exchangeRate).toFixed(2);

  return convertedAmount;
};

consol.log('Converted Currency 1: $${convertCurrency(100, 1.1)}');
consol.log('Converted Currency 2: $${convertCurrency(250, 0.85)}');

// Task 6 

let order = [200, 600, 1200, 450, 800];

let applyBulkDiscount = (orders, discountedFunction) => {
  let discountedOrders = orders.map(discountedFunction);
  consol.log("Updated Orders:", discountedOrders)
};

applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount);

// Task 7 

function crateExpenseTracker() {
  let totalExpenses = 0;
  return function(expense) {
    totalExpenses += expenses;
    return 'Total Expense: $${totalExpenses}'
  };
};

let tracker = createExpenseTracker();
consol.log(tracker(200));
consol.log(tracker(150));
