/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return isSymmetricalCore(root, root)
};

const isSymmetricalCore = (root1, root2) => {
    if(!root1 && !root2) {
        return true
    }

    if(!root1 || !root2) {
        return false
    }

    if(root1.val !== root2.val) {
        return false
    }

    return isSymmetricalCore(root1.left, root2.right) && isSymmetricalCore(root1.right, root2.left)
}