const BinaryHeap = require('./binaryHeap');

function maxHeap() {
  BinaryHeap.apply(this, arguments);
}

maxHeap.prototype = BinaryHeap.prototype;
maxHeap.prototype.shouldSwap = (childData, parentData) => childData > parentData;

module.exports = maxHeap;
