/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
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

const invertTree = root => {
    if (!root) return null;

    const queue = [];
    queue.push(root)
    while(queue.length !== 0) {
        let node = queue.pop()
        let temp = node.left

        node.left = node.right;
        node.right = temp

        if(node.left) {
            queue.push(node.left)
        }

        if(node.right) {
            queue.push(node.right)
        }
    }

    return root;
};

invertTree(tree)