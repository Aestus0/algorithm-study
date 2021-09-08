/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (root === null) {
        return false;
    }
    var res = [];
    var p = root;
    helper(root, 0, res);
    return res.includes(targetSum);
};

function helper(node, sum, res) {
     sum = node.val + sum;
     if (node.left === null && node.right === null) {
         res.push(sum);
     }
     if (node.left !== null) {
         helper(node.left, sum, res);
     } 
     if (node.right !== null) {
         helper(node.right, sum, res);
     }
}
