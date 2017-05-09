var assert = require("assert");
var Item = require("../item.js")

describe("Item", function(){
  beforeEach(function(){
    this.item = new Item("Apple", 1, true);
  })

  it(" has a name!", function(){
    assert.equal("Apple", this.item.name);
  })

  it(" has a price!", function(){
    assert.equal(1, this.item.price);
  })

  it(" has a eligible value of true", function(){
    assert.equal(true, this.item.eligible);
  })



})