class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(val) {
    const newNode = new Node(val)

    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode(node, newNode) {
    if (newNode.val < node.val) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  remove(val) {
    this.root = this.removeNode(this.root, val)
  }

  removeNode(node, val) {
    if (node === null) return null
    else if (val < node.val) {
      node.left = this.removeNode(node.left, val)
    } else if (val > node.val) {
      node.right = this.removeNode(node.right, val)
    } else {
      if (node.left === null && node.right === null) {
        node = null
        return node
      } 

      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }

      const min = this.findMinNode(node.right)
      node.val = min.val

      node.right = this.removeNode(node.right, min.val)
      return node
    }

    return node
  }

  findMinNode(node) {
    if (node.left === null) return node
    else return this.findMinNode(node.left)
  }

  getRroot() {
    return this.root
  }
                
  inorder(node) {
    this.inorder(node.left)
    console.log(node.val)
    this.inorder(node.right)
  }
  
  preorder(node) {
    console.log(node.val)
    this.inorder(node.left)
    this.inorder(node.right)
  }
  
  postorder(node) {
    this.inorder(node.left)
    this.inorder(node.right)
    console.log(node.val)
  }

  search(node, val) {
    if (node === null) {
      return null
    } else if (val < node.val) {
      return this.search(node.left, val)
    } else if (val > node.val) {
      return this.search(node.right, val)
    } else {
      return node
    }
  }
}

module.exports = BST