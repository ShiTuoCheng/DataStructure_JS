/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
// 一颗树
/* jshint esversion: 6 */
var tree = {
    value: 1,
    left: {
      value: 2,
      left: {
        value: 4
      }
    },
    right: {
      value: 3,
      left: {
        value: 5,
        left: {
          value: 7
        },
        right: {
          value: 8
        }
      },
      right: {
        value: 6
      }
    }
  };

const  leafSimilar = (root1, root2) => {
    // if (!root1 || !root2) return false;
    // if (!root1 && !root2) return true;
    
    let resQueue1 = ''
    let resQueue2 = ''

    dfs(root1, resQueue1)
    dfs(root2, resQueue2)

    return resQueue1 == resQueue2
};

const dfs = (node, leafQueue) => {
    if (node) {
        if (!node.left && !node.right) {
            leafQueue += node.value
        }

        dfs(node.left, leafQueue)
        dfs(node.right, leafQueue)
    }
}

console.log(leafSimilar(tree, tree))