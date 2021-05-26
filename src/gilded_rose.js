const { legendary, updateLegendary } = require("./updaters/legendary");
const { cheese, updateCheese } = require("./updaters/cheese");
const { concert, updateConcert } = require("./updaters/concert");

const maxQuality = 50;
const minQuality = 0;
class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(function (item) {
      if (item.name == legendary) {
        return updateLegendary(item);
      }
      if (cheese(item)) {
        return updateCheese(item);
      }
      if (concert(item)) {
        return updateConcert(item);
      }
    })
  };
}
module.exports = {
  Item,
  Shop,
  maxQuality,
  minQuality,
};
