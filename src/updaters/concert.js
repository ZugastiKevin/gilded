const { decrementSellIn, incrementQuality, expired } = require('../allModul');
const { minQuality } = require ('../gilded_rose');

const concert = (item) => {
  return item.name === "Backstage passes to a TAFKAL80ETC concert";
};

const updateConcert = (item) => {
  decrementSellIn(item);
  incrementQuality(item);
  if (item.sellIn < 10) {
    incrementQuality(item);
  }
  if (item.sellIn < 5) {
    incrementQuality(item);
  }
  if (expired(item)) {
    item.quality = minQuality;
  }
  return;
};

module.exports = {
  concert,
  updateConcert,
};