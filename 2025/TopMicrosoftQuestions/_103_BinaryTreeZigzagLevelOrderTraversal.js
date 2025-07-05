// 103. Binary Tree Zigzag Level Order Traversal
/**

.push(x)	배열 끝에 요소 추가	      오른쪽에 추가
.unshift(x)	배열 처음에 요소 추가	  왼쪽에 추가
.shift()	배열 처음 요소 꺼내기	  왼쪽에서 꺼냄


왼 -> 오
오 -> 왼
if(leftToRight){
level.push(node.val);
} else{
 level.unshift(node.val);
}

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
var zigzagLevelOrder = function (root) {
  let result = [];
  if (!root) {
    return [];
  }
  let queue = [root];
  console.log("q는 -> ", queue, " 이다");
  let leftToRight = true;

  while (queue.length > 0) {
    let levelSize = queue.length;
    console.log("큐의 사이즈는? ", queue.length);
    let level = [];

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      console.log("node는? ", node);

      if (leftToRight) {
        level.push(node.val);
      } else {
        level.unshift(node.val);
      }
      console.log("level은? ", level);
      console.dir(node);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level); // 한 레벨 완료!
    leftToRight = !leftToRight;
  }
  return result;
};
