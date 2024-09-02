class Shipping {
  constructor(type) {
    this.type = type;
  }

  calculateCost(weight) {
    if (this.type === "standard") {
      return weight * 10;
    } else if (this.type === "express") {
      return weight * 20;
    } else if (this.type === "sameDay") {
      return weight * 30;
    }
    return 0;
  }
}

// Penggunaan
const standardShipping = new Shipping("standard");
console.log(standardShipping.calculateCost(5)); // 50

const expressShipping = new Shipping("express");
console.log(expressShipping.calculateCost(5)); // 100

const sameDayShipping = new Shipping("sameDay");
console.log(sameDayShipping.calculateCost(5)); // 150
