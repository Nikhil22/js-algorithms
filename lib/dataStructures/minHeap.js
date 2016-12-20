const binaryHeap = require('./binaryHeap');

function minHeap() {
  binaryHeap.apply(this, arguments);
}

minHeap.prototype = binaryHeap.prototype;

minHeap.prototype.shouldSwap = function (childData, parentData) {
  return childData < parentData;
};

module.exports = minHeap;
