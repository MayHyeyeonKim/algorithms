// 314. Binary Tree Vertical Order Traversal

/**
Given a binary tree, perform a vertical order traversal of the tree.

       3
      / \
     9  20
        / \
       15  7

Input: root = [3,9,20,null,null,15,7]
Output: [[9],[3,15],[20],[7]]

In a binary tree, vertical order traversal groups nodes by imaginary vertical lines (columns), 
and outputs them from left to right, top to bottom within each column.

[brief flow]
- Traverse the tree using BFS or DFS.
- Track the column index for each node.
- Group nodes by their column index.
- Sort and return the result.

[Pseudocode]
1. If the root is null, return an empty array.

2. Initialize columnMap = empty map (column index → [list of node values])
3. Initialize queue = empty queue (for BFS traversal) [(root, 0)] // (node, column index)
4. minColumn = 0, maxColumn = 0 // Track the range of column indices

5. while queue is not empty:
    a. (node, column) = queue.dequeue()
    b. add node.val in columnMap[column]
    c. if node.left is not null:
        i. queue.enqueue((node.left, column - 1))
    d. if node.right is not null:
        i. queue.enqueue((node.right, column + 1))

6. result = empty array
7. for column in minColumn to maxColumn:
    a. result.append(columnMap[column])

8. Return result
 */

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
 * @return {number[][]}
 */
function verticalOrder(root) {
  if (!root) return [];

  const colMap = new Map(); // col -> list of node values
  const queue = [[root, 0]];
  let minCol = 0;
  let maxCol = 0;

  while (queue.length) {
    const [node, col] = queue.shift();

    if (!colMap.has(col)) {
      colMap.set(col, []);
    }
    colMap.get(col).push(node.val);

    if (node.left) {
      queue.push([node.left, col - 1]);
      minCol = Math.min(minCol, col - 1);
    }
    if (node.right) {
      queue.push([node.right, col + 1]);
      maxCol = Math.max(maxCol, col + 1);
    }
  }
  const result = [];
  for (let i = minCol; i <= maxCol; i++) {
    result.push(colMap.get(i));
  }
  return result;
}

console.log(
  verticalOrder({
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
      val: 20,
      left: { val: 15, left: null, right: null },
      right: { val: 7, left: null, right: null },
    },
  })
); // Output: [[9],[3,15],[20],[7]]
console.log(verticalOrder(null)); // Output: []

/**
queue에는 처음에 [3, 0]

3을 꺼내고 → columnMap[0] = [3]

9는 col = -1, 20은 col = 1 → queue에 넣음

다음은 9, col = -1 → columnMap[-1] = [9]

다음은 20, col = 1 → columnMap[1] = [20]

15는 col = 0, 7은 col = 2

다음은 15, col = 0 → columnMap[0] = [3, 15]

다음은 7, col = 2 → columnMap[2] = [7]
 */
