function chooseProduct(segment) {
  // Add your solution here!
  const product = {
    Beverage: "Soda",
    Fruit: "Apple",
    Hygiene: "Soap",
  };
  if (product[segment]) {
    return product[segment];
  } else {
    return "This product does not exist";
  }
}

module.exports = chooseProduct;
