/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;
    let nodesVisited = [this.root]
    let depth = 1; 

    while(nodesVisited.length) {
      let nodesInLevel = nodesVisited.length
      
      for(let i = 0; i < nodesInLevel; i++) {
        let current = nodesVisited.shift()

        if(!current.left && !current.right) {
          return depth
        }

        if(current.left) {
          nodesVisited.push(current.left)
        }
        if(current.right){
          nodesVisited.push(current.right)
        }
      }
      depth++
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;
    let nodesVisited = [this.root]
    let maxDepth = 0;

    while(nodesVisited.length) {
      let nodesInLevel = nodesVisited.length
      
      for(let i = 0; i < nodesInLevel; i++) {
        let current = nodesVisited.shift()

        
        // add child nodes to the array
        if(current.left) nodesVisited.push(current.left)
        if(current.right) nodesVisited.push(current.right)
      }
      // Increment depth for each level
      maxDepth++
    }
    return maxDepth  
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if(!this.root) return 0;

    let maxSumValue = -Infinity

    function dfs(node) {
      if(!node) {
        return 0
      }

      const leftMaxSum = dfs(node.left)

      const rightMaxSum = dfs(node.right)


      const currentMaxSum = Math.max(node.val, nopde.val + leftMaxSum, node.val + rightMaxSum)

      maxSumValue = Math.max(maxSumValue, currentMaxSum)

      return Math.max(node.val, node.val + leftMaxSum, node.val + rightMaxSum)
    }

    dfs(this.root)

    return maxSumValue
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if(!this.root) {
      return null;
    }

    let closestLarger = null

    function inOrderTraversal(node) {
      if(!node) {
        return;
      }

      if(node.val >= lowerBound || node.val === closestLarger) {
        inOrderTraversal(node.right)
      }else{
        inOrderTraversal(node.left)
        inOrderTraversal(node.right)
      }
    }

    inOrderTraversal(this.root)

    return closestLarger;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

const root = new BinaryTreeNode(1)
const node1 = new BinaryTreeNode(2)
const node2 = new BinaryTreeNode(3)
const node3 = new BinaryTreeNode(4)
const node4 = new BinaryTreeNode(5)
const node5 = new BinaryTreeNode(6)
const node6 = new BinaryTreeNode(7)

root.left = node1
root.right = node2
node2.left= node3
node2.right = node4
node4.left = node5
node4.right = node6

const tree = new BinaryTree(root)
console.log(tree)
console.log(tree.minDepth())

module.exports = { BinaryTree, BinaryTreeNode };
