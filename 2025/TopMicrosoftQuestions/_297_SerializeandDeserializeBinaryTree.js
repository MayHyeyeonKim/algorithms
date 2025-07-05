// 297. Serialize and Deserialize Binary Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) {
    return "null";
  }
  return root.val + "," + serialize(root.left) + "," + serialize(root.right);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data || data === "null") {
    return null;
  }
  const values = data.split(","); //배열안, 쉼표단위로 쪼개서 벨류스넣어두기
  let index = 0;
  // Lexical Environment - Closure 떄문에 가능
  // buildTree 함수 내부에서 index++를 통해 index 값이 변경되면, 이 변경된 값은 deserialize 함수의 렉시컬 환경에 있는 index 변수에 반영

  function buildTree() {
    if (index >= values.length || values[index] === "null") {
      //다 돌아봤거나 널이면 인덱스 한칸 옮겨주고 널반환
      index++;
      return null;
    }
    const node = new TreeNode(parseInt(values[index]));
    index++;
    node.left = buildTree();
    node.right = buildTree();
    return node;
  }
  return buildTree();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
