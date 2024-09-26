// Definition for a binary tree node.
class TreeNode {
    constructor(x) {
        this.val = x;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    lowestCommonAncestor(root, nodes) {
        // Convert the nodes array to a Set for quick lookup
        const nodeSet = new Set(nodes);

        // Helper function for DFS traversal
        function dfs(node) {
            if (!node) return null;

            // If the current node is one of the target nodes, return it
            if (nodeSet.has(node)) return node;

            // Traverse left and right subtrees
            const left = dfs(node.left);
            const right = dfs(node.right);

            // If both left and right are found, current node is the LCA
            if (left && right) return node;

            // Return the node that is found, either left or right
            return left ? left : right;
        }

        // Start DFS from the root
        return dfs(root);
    }
}

// Example usage:
// Creating the binary tree [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]
const root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

// Find the lowest common ancestor of nodes 7 and 4
const nodes = [root.left.right.left, root.left.right.right];  // [7, 4]
const solution = new Solution();
const lca = solution.lowestCommonAncestor(root, nodes);

console.log(`Lowest Common Ancestor of nodes ${nodes[0].val} and ${nodes[1].val} is: ${lca.val}`);
