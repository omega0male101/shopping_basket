var ShoppingBasket = function(){
  this.content = [],
  this.card = false
}


ShoppingBasket.prototype = {
  add: function(item){
    this.content.push(item);
  },

  remove: function(item){
    var pos = this.content.indexOf(item);
    this.content.splice(pos, 1);
  },

  total: function(){
    var totalValue = 0

    for (var item of this.content){
      totalValue += item.price;
    }

      if (totalValue <= 20){
        return totalValue;
      }

    else{
      if (this.card === true){
        var newValue = totalValue * 0.9 * 0.95;
        return Math.round(newValue * 100) / 100;
      }
      else{
        var newValue = totalValue * 0.9;
        return Math.round(newValue * 100) / 100;
      }
    }
  }
}



module.exports = ShoppingBasket;