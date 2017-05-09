var assert = require("assert");
var ShoppingBasket = require("../shopping_basket.js");
var Item = require("../item.js");


describe("Shopping Basket", function(){
  beforeEach(function(){
    this.item1 = new Item("Apple", 1, true);
    this.item2 = new Item("Orange", 1, true);
    this.item3 = new Item("Pear", 1, false);
    this.item4 = new Item("Bunch of Bananana", 20, true);

    this.ShoppingBasket = new ShoppingBasket();
  });


  it("Can add item", function(){
    this.ShoppingBasket.add(this.item1);
    this.ShoppingBasket.add(this.item2);
    assert.equal(2, this.ShoppingBasket.content.length);
  });

  it("Can remove item", function(){
    this.ShoppingBasket.add(this.item2);
    this.ShoppingBasket.add(this.item3);
    this.ShoppingBasket.remove(this.item2);
    assert.equal(1, this.ShoppingBasket.content.length);
  })

  it("Can calculate total", function(){
    this.ShoppingBasket.add(this.item1);
    this.ShoppingBasket.add(this.item2);
    this.ShoppingBasket.add(this.item3);
    var total = this.ShoppingBasket.total();
    assert.equal(3, total);
  })

  it("Does not discount if less than £20", function(){
    this.ShoppingBasket.add(this.item4);
    assert.equal(20, this.ShoppingBasket.total());
  })

  it("Discount of 10% on orders over £20", function(){
    this.ShoppingBasket.add(this.item1);
    this.ShoppingBasket.add(this.item4);
    assert.equal(18.9, this.ShoppingBasket.total());
  })

  it("Can apply the 5% discount", function(){
    this.ShoppingBasket.add(this.item1);
    this.ShoppingBasket.add(this.item4);
    this.ShoppingBasket.card = true;
    assert.equal(17.96, this.ShoppingBasket.total());
  })




});