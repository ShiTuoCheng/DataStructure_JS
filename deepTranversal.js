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

/**
 * 深度优先遍历
 */

const deepTranversal = rootNode => {

  const stack = [];
  stack.push(rootNode);

  while(stack.length !== 0){

    let node = stack.pop();
    console.log(node);
    if(node.left){

      stack.push(node.left);
    }

    if(node.right){

      stack.push(node.right);
    }
  }
}