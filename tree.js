/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let nodeVisited = [this.root]
    let total = 0;
    while(nodeVisited.length) {
      let current = nodeVisited.shift()
      total += current.val
      nodeVisited.push(...current.children)
    }
    if(!nodeVisited.length) return total
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let nodeVisited = [this.root]
    let count = 0;

    while(nodeVisited.length) {
      let current = nodeVisited.pop()
      if(current.val % 2 === 0) {
        count ++
      }else{
        nodeVisited.push(...current.children)
      }
    }
    return count
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let nodesVisited = [this.root];
    let count = 0;
    
    while(nodesVisited.length) {
      let current  = nodesVisited.pop()
      if(current.val > lowerBound) {
        count++
      }
      nodesVisited.push(...current.children)
    }
    return count
  }
}

module.exports = { Tree, TreeNode };
