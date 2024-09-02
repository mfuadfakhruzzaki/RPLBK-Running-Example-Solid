// Interface for Shipping Strategy
class ShippingStrategy {
  calculateCost(weight) {
    throw new Error("Method not implemented");
  }
}

// Implementasi untuk masing-masing tipe pengiriman
class StandardShipping extends ShippingStrategy {
  calculateCost(weight) {
    return weight * 10;
  }
}

class ExpressShipping extends ShippingStrategy {
  calculateCost(weight) {
    return weight * 20;
  }
}

class SameDayShipping extends ShippingStrategy {
  calculateCost(weight) {
    return weight * 30;
  }
}

// Class Shipping yang terbuka untuk perluasan tipe pengiriman
class Shipping {
  constructor(strategy) {
    this.strategy = strategy;
  }

  calculateCost(weight) {
    return this.strategy.calculateCost(weight);
  }
}

// Penggunaan
const standardShipping = new Shipping(new StandardShipping());
console.log(standardShipping.calculateCost(5)); // 50

const expressShipping = new Shipping(new ExpressShipping());
console.log(expressShipping.calculateCost(5)); // 100

const sameDayShipping = new Shipping(new SameDayShipping());
console.log(sameDayShipping.calculateCost(5)); // 150
