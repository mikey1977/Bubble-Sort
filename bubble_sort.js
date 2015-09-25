function BubbleSort(items) {
  this.items = items;
  this.array = [];
}

BubbleSort.prototype.sort = function() {
  for (var j = 0; j < this.items.length; j++) {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i] > this.items[i + 1]) {
        var temp = this.items[i];
        this.items[i] = this.items[i + 1];
        this.items[i + 1] = temp;
      }
    }
  }
    return this.items;

};