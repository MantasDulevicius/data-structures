class TrieNode {
  constructor(val) {
    this.val = val
    this.parent = null
    this.children = {}
    this.end = false
  }

  getWord() {
    let letters = [], node = this

    while (node !== null) {
      letters.unshift(node.val)
      node = node.parent
    }

    return letters.join('')
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(null)
  }

  insert(word) {
    let node = this.root

    for (let i = 0; i < word.length; i++) {
      if (!node.children[word[i]]) {
        node.children[word[i]] = new TrieNode(word[i])
        node.children[word[i]].parent = node;
      }

      node = node.children[word[i]]

      if (i === word.length - 1) {
        node.end = true
      }
    }
  }

  contains() {
    let node = this.root

    for (let i = 0; i < word.length; i++) {
      if (node.children[word[i]]) {
        node = node.children[word[i]]
      } else {
        return false
      }
    }

    return node.end
  }

  find(prefix) {
    let node = this.root
    let result = []

    for (let i = 0; i < prefix.length; i++) {
      if (node.children[prefix[i]]) {
        node = node.children[prefix[i]]
      } else {
        return result
      }
    }

    findAllWord(node, result)
    return result
  }

  findAllWords(node, arr) {
    if (node.end) {
      arr.unshift(node.getWord())
    }

    for (let child in node.children) {
      this.findAllWords(node.children[child], arr)
    }
  }

  remove(word) {
    let root = this.root
    if (!word) return;

    const removeWord = (node, word) => {
      if (node.end && node.getWord() === word) {
        let hasChildren = Object.keys(node.children).length > 0

        if (hasChildren) {
          node.end = false
        } else {
          node.parent.children = {}
        }

        return true
      }

      for (let key in node.children) {
        removeWord(node.children[key], word)
      }
    }

    removeWord(root, word)
  }
}