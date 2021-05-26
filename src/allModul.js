const { maxQuality, minQuality } = require('./gilded_rose');

const incrementQuality = (item) => {
  if (item.quality < maxQuality) {
    item.quality += 1;
  }
};

const decrementQuality = (item) => {
  if (item.quality < minQuality) {
    item.quality -= 1;
  }
};

const decrementSellIn = (item) => {
  item.sellIn -= 1;
};

const expired = (item) => {
  item.sellIn <= 0;
};

module.exports = {
  incrementQuality,
  decrementQuality,
  decrementSellIn,
  expired,
};