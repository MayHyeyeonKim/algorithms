// 1650. Lowest Common Ancestor of a Binary Tree III
function lowestCommonAncestor(p, q) {
  let nodeA = p;
  let nodeB = q;

  while (nodeA !== nodeB) {
    nodeA = nodeA === null ? q : nodeA.parent;
    nodeB = nodeB === null ? p : nodeB.parent;
  }

  return nodeA;
}
