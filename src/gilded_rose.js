class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  };
};

class Shop {
  constructor(items = []) {
    this.items = items;
  };
  
  updateQuality() {
    
    let maxQuality = 50;
    let minQuality = 0;

    this.items.forEach((item) => {

      const findName = (name) => {
        switch(name) {
          case "Sulfuras, Hand of Ragnaros":
            break;
          case "Aged Brie":
            updateCheese(item);
            break;
          case "Backstage passes to a TAFKAL80ETC concert":
            updateConcert(item);
            break;
          default:
            update(item);
        };
      };

      const incrementQuality = (item) => {
        if (item.quality < maxQuality) {
          item.quality += 1;
        }
        if (item.quality >= maxQuality) {
          item.quality = 50;
        }
      };

      const decrementQuality = (item) => {
        if (item.quality < maxQuality) {
          item.quality -= 1;
        }
        if (item.quality <= minQuality) {
          item.quality = 0;
        }
      };
    
      const decrementSellIn = (item) => {
        item.sellIn -= 1;
      };
    
      const expired = (item) => {
        item.sellIn <= 0;
      };
    
      const update = (item) => {
        decrementSellIn(item);
        decrementQuality(item);
        if (item.sellIn <= 0) {
          decrementQuality(item);
        };
        if (item.name.includes("Conjured") === true) {
          decrementQuality(item);
        };
        return;
      };
    
      const updateCheese = (item) => {
        decrementSellIn(item);
        incrementQuality(item);
        if (expired(item)) {
          incrementQuality(item);
        };
        return;
      };
    
      const updateConcert = (item) => {
        decrementSellIn(item);
        incrementQuality(item);
        if (item.sellIn < 10) {
          incrementQuality(item);
        };
        if (item.sellIn < 5) {
          incrementQuality(item);
        };
        if (expired(item)) {
          item.quality = minQuality;
        };
        return;
      };

      findName(item.name);
    });
    return this.items;
  };


}
module.exports = {
  Item,
  Shop,
};