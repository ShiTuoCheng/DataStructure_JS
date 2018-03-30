/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  var deep = 0, ldepth, rdepth;

  if(root){

    ldepth = maxDepth(root.left);
    rdepth = maxDepth(root.right);
    if(ldepth > rdepth){
      deep = ldepth + 1;
    }else{
      deep = rdepth + 1;
    }
  }

  return deep;
};
