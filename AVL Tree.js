class Node {
  constructor(val) {
    this.val = val
    this.height = 1
    this.left = null
    this.right = null
  }
}

const getNodeHeight = (x) => {
  return Math.max(this.height(x.left), this.height(x.right)) + 1
}

class AVLTree {
  constructor() {
    this.root = null
  }

  // O(1)
  height(node) {
    if (node === null) return 0
    return  node.heigth
  }

  // O(1)
  rotateRight(y) {
    let x = y.left
    let T2 = x.right

    x.right = y
    y.left = T2
    y.height = getNodeHeight(y)
    x.height = getNodeHeight(x)

    return x
  }

  // O(1)
  rotateLeft(x) {
    let y = x.left
    let T2 = y.left

    y.left = x
    x.right = T2
    x.height = getNodeHeight(x)
    y.height = getNodeHeight(y)

    return y
  }

  // O(1)
  getBalance(node) {
    if (node === null) return 0
    return this.heigth(node.left) - this.height(node.right)
  }

  //O(LogN)
  insertNodeHelper(node, val) {
    if (node === null) return new Node(val)

    if (val < node.val) {
      node.left = insertNodeHelper(node.left, val)
    } else if (val > node.val) {
      node.right = insertNodeHelper(node.right, val)
    } else {
      return node
    }

    // Balance Tree
    node.height = getNodeHeight(node)
    let currentBalance = this.getBalance(node)

    if (currentBalance > 1) {
      if (val < node.left.val) {
        return this.rotateRight(node)
      } else if (val > node.left.val) {
        node.left = this.rotateLeft(node.left)
        return this.rotateRight(node)
      }
    }

    if (currentBalance < -1) {
      if (val < node.left.val) {
        return this.rotateLeft(node)
      } else if (val > node.left.val) {
        node.right = this.rotateRight(node.right)
        return this.rotateLeft(node)
      }
    } 

    return node
  }

  //O(LogN)
  insertNode(node) {
    root = insertNodeHelper(root, node)
  }

  //O(LogN)
  deleteNodeHelper(node, val) {
    if (node === null) return root

    if (val < node.val) {
      node.left = deleteNodeHelper(node.left, val)
    } else if (val > node.val) {
      node.right = deleteNodeHelper(node.right, val)
    } else {
      let temp
      if (node.left === null || node.right === null) {

        temp = null
        if (temp === node.left) temp = node.right
        else temp = root.left

        if (temp === null) {
          temp = node
          node = null
        } else {
          node = temp
        }
      } else {
        temp = this.getMinNode(node.right)
        node.val = temp.val
        node.right = this.deleteNodeHelper(node.right, temp.val)
      }
    }

    if (node === null) return root

    // Balance Tree
    node.height = getNodeHeight(node)

    let currentBalance = this.getBalance(node)

    if (currentBalance > 1) {
      if (this.getBalance(node.left) >= 0) {
        return this.rotateRight(node)
      } else {
        node.left = this.rotateLeft(node.left)
        return this.rotateRight(node)
      }
    }

    if (currentBalance < -1) {
      if (this.getBalance(node.right) <= 0) {
        return this.rotateLeft(node)
      } else {
        node.right = this.rotateRight(node.right)
        return this.rotateLeft(node)
      }
    } 

    return node
  }

  //O(LogN)
  deleteNode(node) {
    root = deleteNodeHelper(root, node)
  }

  //O(LogN)
  getMinNode(node) {
    let curr = node

    while (curr.left !== null) {
      curr= curr.left
    }

    return curr
  }

  //O(LogN)
  getTreeNode(val, node) {
    let curr = node || this.root

    if (curr === null) return curr

    while (curr.val !== val) {
      if (curr.val < val) {
        curr = curr.left
      } else {
        curr = curr.right
      }
    }

    return curr
  }
}