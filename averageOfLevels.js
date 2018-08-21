/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const queue = []
    queue.push(root)

    while(queue.length !== 0) {
        let node = queue.pop()

        if (node.left) {
            queue.push(node.left)
        }

        if (node.right) {
            queue.push
        }
    }
};