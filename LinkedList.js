class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  // O(n)
  add(val) {
    let node = new Node(val)
    let curr

    if (this.head === null) {
      this.head = node
    } else {
      curr = this.head

      while (curr.next) {
        curr = curr.next
      }

      curr.next = node
    }

    this.size++
  }

  // O(n)
  insertAt(val, index) {
    if (index < 0 || index > this.size) return console.log('Index is out of bounds')

    let node = new Node(val)
    let curr = this.head, prev, currIndex = 0

    if (index === 0) {
      node.next = this.head
      this.head = node
    } else {
      while (currIndex < index) {
        currIndex++
        prev = curr
        curr = curr.next
      }

      node.next = curr
      prev.next = node
    }

    this.size++
  }

  // O(n)
  removeFrom(index) {
    if (index < 0 || index > this.size) return console.log('Index is out of bounds')

    let curr = this.head, prev = curr, currIndex = 0
      
    if (index === 0) {
      this.head = curr.next
    } else {
      while (currIndex < index) {
        currIndex++
        prev = curr
        curr = curr.next
      }

      prev.next = curr.next
    }

    this.size--
    return curr.val
  }

  // O(n)
  removeByValue(val) {
      let curr = this.head, prev = null

      while (curr !== null) {

        if (curr.val === val) {
          if (prev === null) {
            this.head = curr.next
          } else {
              prev.next = curr.next
          }

          this.size--
          return curr.val
        }

        prev = curr
        curr = curr.next
      }

      console.log('Value was not found')
      return null
  }

  // O(n)
  indexOf(val) {
    let index = 0, curr = this.head

    while(curr !== null) {
      if (curr.val === val) {
        return index
      }

      index++
      curr = curr.next
    }

    console.log('Value was not found')
    return -1
  }git 

  // O(1)
  isEmpty() {
    return this.size === 0
  }

  // O(1)
  size() {
    return this.size
  }

  // O(n)
  printList(separator) {
    let curr = this.head, values = ''

    while (curr) {
      values += curr.val + (separator || ' ')
      curr = curr.next
    }

    console.log(values)
  }
}