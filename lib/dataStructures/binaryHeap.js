function BinaryHeap(data) {
  let array = [];

  if (data && (data instanceof Array)) {
    array = data;
    const length = array.length;
    for (let i = Math.floor((length - 1) / 2); i >= 0; i--) {
      this.bubbleDown(i, array[i]);
    }
  }

  this.getArray = function() {
    return array;
  }

  this.setArray = function(_array) {
    array = _array;
  }

  this.getLength = function() {
    return array.length;
  }
}

function shouldSwap() {
  throw new Error('This method is not implemented. Concrete implementations should implement.');
}

function getParentIndex(childIndex) {
  return Math.floor((childIndex - 1) / 2);
}

function getLeftChild(parentIndex) {
  return parentIndex * 2 + 1;
}

function getRightChild(parentIndex) {
  return parentIndex * 2 + 2;
}

function add(data) {
  if (data === undefined) {
    throw new Error('data must be valid to add');
  }

  const array = this.getArray();
  array.push(data);
  this.setArray(array);

  this.bubbleUp(array.length - 1, data);
}

function bubbleUp(childIndex, childData) {
  const array = this.getArray();

  if (childIndex > 0) {
    const parentIndex = this.getParentIndex(childIndex);
    const parentData = array[parentIndex];

    if (this.shouldSwap(childData, parentData)) {
      array[parentIndex] = childData;
      array[childIndex] = parentData;
      this.bubbleUp(parentIndex, childData);
    }
  }

  this.setArray(array);
}

function bubbleDown(parentIndex, parentData) {
  const array = this.getArray();

  if (parentIndex < array.length) {
    let targetIndex = parentIndex;
    let targetData = parentData;

    const leftChildIndex = this.getLeftChild(parentIndex);
    const rightChildIndex = this.getRightChild(parentIndex);

    function trySwap(index, array, shouldSwap) {
      if (index < array.length) {
        const data = array[index];

        if (shouldSwap(data, targetData)) {
          targetIndex = index;
          targetData = data;
        }
      }
    }

    trySwap(leftChildIndex, array, this.shouldSwap);
    trySwap(rightChildIndex, array, this.shouldSwap);

    if (targetIndex !== parentIndex) {
      array[parentIndex] = targetData;
      array[targetIndex] = parentData;
      this.bubbleDown(targetIndex, parentData);
    }
  }

  this.setArray(array);
}

function removeHead() {
  const array = this.getArray();

  const headNode = array[0];
  const tailNode = array.pop();

  array[0] = tailNode;
  this.bubbleDown(0, tailNode);

  this.setArray(array);

  return headNode;
}

BinaryHeap.prototype = {
  add,
  bubbleDown,
  bubbleUp,
  getLeftChild,
  getParentIndex,
  getRightChild,
  removeHead,
  shouldSwap
};

module.exports = BinaryHeap;
