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
 * 用递归方法计算一棵树的最大深度
 */
const maxDepth = treeNode => {
    if (!treeNode) return 0
    const leftNode = maxDepth(treeNode.left)
    const rightNode = maxDepth(treeNode.right)
    return Math.max(leftNode, rightNode) + 1
}

maxDepth(tree)

