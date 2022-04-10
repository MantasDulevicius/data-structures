class HashMap {
  constructor(capacity = 2, loadFactor = 0.75) {
    this.map = new Array(capacity).fill(null)
    this.loadFactor = this.loadFactor
    this.collisions = 0
  }

  hash(key) {
    let hashCode = 0
    for (let i = 0; i < key.length; i++) {
      hashCode += key.charCodeAt(i)
    }
    return hashCode % this.map.length
  }


  set(key, val) {
    const { mapIndex, entryIndex } = this._getIndexes(key)


    if (entryIndex === undefined) {
      // Add
      const keyIndex = this.keys.push({content: key}) - 1
      this.map[mapIndex] = [...(this.map[mapIndex] || []), {key, value, keyIndex}]
      this.size++

      if (this.map[mapIndex].length > 1) {this.collisions++}
    } else {
      // Overwrite
      this.map[mapIndex][entryIndex].val = val
    }

    if (this.loadFactor > 0 && this.getLoadFactor() > this.loadFactor) {
      this.rehash(this.map.length * 2)
    }
  }

  get(key) {
    const index = this.hash(key)

    for (let i = 0; i < this.map[index].length; i++) {
      const entry = this.map[index][i]
      if (entry.key === key) return entry.value
    }
  }

  _getIndexes(key) {
    const mapIndex = this.hash(key);
    const values = this.map[mapIndex] || [];

    for (let entryIndex = 0; entryIndex < values.length; entryIndex++) {
      const entry = values[entryIndex];
      if(entry.key === key) {
        return {mapIndex, entryIndex};
      }
    }

    return {mapIndex};
  }

  delete(key) {
    const {mapIndex, entryIndex} = this._getIndexes(key)
    if (entryIndex === undefined) return false

    this.map[mapIndex].splice(entryIndex, 1) 
    delete this.keys[keyIndex]
    this.size--

    return true
  }

  get(key) {
    const {mapIndex, entryIndex} = this._getIndexes(key)

    if (entryIndex === undefined) return
    return this.map[mapIndex][entryIndex].value
  }

  has(key) {
    return !!this.get(key)
  }

  rehash(newCapacity) {
    const newHashMap = new HashMap(newCapacity)

    this.keys.forEach(key => {
      if (key) {
        newHashMap.set(key.content, this.get(key.content))
      }
    })

    this.map = newMap.map
    this.collisions = newMap.collisions
    this.keys = newMap.keys
  }

  getLoadFactor() {
    return this.size / this.map.length
  }

}