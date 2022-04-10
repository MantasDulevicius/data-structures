class Stack {
  constructor() {
    this.values = []
  }

  push(val) {
    this.values.push(val)
  }

  pop() {
    if (this.values.length === null) {
      return "Stack is empty"
    }
    return this.values.pop()
  }

  peek() {
    return this.values[this.values.length -1]
  }

  isEmpty() {
    return this.length === null
  }

  printStack(separator) {
    let print = ''
    for (let i = 0; i < this.values.length; i++) {
      print += this.vlaues[i] + (separator || ' ')
    }
    return print
  }
}