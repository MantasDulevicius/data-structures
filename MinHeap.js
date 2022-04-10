class MinHeap {
  constructor() {
    this.heap = [null]
  }

  // O(1)
  getMin() {
    return this.heap[1]
  }

  insert(val) {
    this.heap.push(val)

    if (this.heap.length > 1) {
      let currIndex = this.heap.length - 1
      let parentIndex = Math.floor(currIndex / 2)

      while (currIndex > 1 && this.heap[parentIndex] > this.heap[currIndex]) {
        // Swap
        [this.heap[parentIndex], this.heap(currIndex)] = [this.heap[curr], this.heap[parentIndex]]
        currIndex = parentIndex
      }
    }
  }

  remove() {
    let min = this.heap[1]

    if (this.heap.length > 2) {
      this.head[1] = this.heap[this.heap.length - 1]
      // remove last element
      this.heap.splice(this.heap.length - 1)

      if (this.heap.length === 3) {
        if (this.heap[1] > this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
        }
        return smallest
      }

      let currIndex = 1
      let leftIndex = currentIndex * 2
      let rightIndex = currentIndex * 2 + 1

      while (this.heap[leftIndex] && this.heap[rightIndex] && (this.heap[currIndex] > this.heap[leftIndex] || this.heap[currIndex] > this.heap[rightIndex])) {

        if (this.heap[leftIndex] < this.heap[rightIndex]) {
          [this.heap[currIndex], this.heap[leftIndex]] = [this.heap[leftIndex], this.heap[currIndex]]
        } else {
          [this.heap[currIndex], this.heap[rightIndex]] = [this.heap[rightIndex], this.heap[currIndex]]
        }

        leftIndex = currIndex * 2
        rightIndex = currIndex * 2 + 1
      }

    } else if (this.heap.length === 2) {
      // remove first element
      this.heap.splice(1, 1)
    } else {
      return null
    }

    return smallest
  }
}