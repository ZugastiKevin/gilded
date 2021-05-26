const { decrementSellIn, decrementQuality, expired } = require('../allModul');

const update = (item) => {
  decrementSellIn(item);
  decrementQuality(item);
  if (expired(item)) {
    decrementQuality(item);
  }
};

module.exports = {
  update,
};