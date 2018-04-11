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
 * 二叉树广度优先遍历
 */

const wideTranversal = rootNode => {

  const queue = [];

  queue.push(rootNode);

  while(queue.length !== 0){

    let node = queue.shift();
    console.log(node);

    if(node.left){
      queue.push(node.left);
    }

    if(node.right){
      queue.push(node.right);
    }
  }
}
