const { decrementSellIn, incrementQuality, expired } = require("../allModul");

const cheese = (item) => {
  return item.name === "Aged Brie";
};

const updateCheese = (item) => {
  decrementSellIn(item);
  incrementQuality(item);
  if (expired(item)) {
    incrementQuality(item);
  }
  return;
};

module.exports = {
  cheese,
  updateCheese,
};
