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
 * @return {boolean}
 */
var isValidBST = function(root) {
    if (root === null) {
        return true;
    }
    helper.n = - Infinity;
    return helper(root);
};


function helper(root) {
    if (root.left!==null && !helper(root.left)) {
        return false;
    }
    if (helper.n >= root.val) {
        return false;
    }
    helper.n = root.val;
    if (root.right!==null && !helper(root.right)) {
        return false;
    }
    return true;
}
