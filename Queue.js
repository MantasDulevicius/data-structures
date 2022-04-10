class Queue {
  constructor(size = 10) {
    this.values = new Array(size).fill(null)
    this.end = 0
  }

  enqueue(val) {
    if (this.end < this.values.length) {
      this.values[this.end] = val
      this.end++
    } else {
      const newQueue = new Queue(this.values.length * 2)
      for (let i = 0; i < this.end; i++) {
        newQueue.enqueue(this.values[i])
      }
      newQueue.enqueue(val)
      this.values = newQueue.values
      this.end = newQueue.end
    }
  }

  length() {
    return this.end
  }

  isEmpty() {
    return this.end === 0
  }

  peekFirst() {
    if(!this.isEmpty()) {
      return this.values[0]
    }
  }

  peekLast() {
    if(!this.isEmpty()) {
      return this.values[this.end - 1]
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      this.end--
      return this.values.shift()
    }
  }

  print(separator) {
    let print = ''
    for (let i = 0; i < this.end; i++) {
      print += this.values[i] + (this.end - 1 !== i ? separator || ' ' : '')
    }
    return print
  }

  clear() {
    this.values.length = 0
    this.end = 0
  }
}

module.exports = Queue