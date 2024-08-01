function invertTree(root) {
    if (root === null) {
        return null;
    }

    // Invert the left and right subtrees
    const left = invertTree(root.left);
    const right = invertTree(root.right);

    // Swap the left and right children
    root.left = right;
    root.right = left;

    return root;
}

// Example usage:
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Create a binary tree: 
//     4
//    / \
//   2   7
//  / \ / \
// 1  3 6  9
const root = new TreeNode(4, 
    new TreeNode(2, new TreeNode(1), new TreeNode(3)), 
    new TreeNode(7, new TreeNode(6), new TreeNode(9))
);

console.log(invertTree(root));
// Output: 
//     4
//    / \
//   7   2
//  / \ / \
// 9  6 3  1
