// 1650. Lowest Common Ancestor of a Binary Tree III

function _Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
  this.parent = null;
}

function buildTree() {
  const nodes = {};
  [3, 5, 1, 6, 2, 0, 8, 7, 4].forEach((val) => {
    nodes[val] = new _Node(val);
  });

  nodes[3].left = nodes[5];
  nodes[3].right = nodes[1];
  nodes[5].parent = nodes[3];
  nodes[1].parent = nodes[3];

  nodes[5].left = nodes[6];
  nodes[5].right = nodes[2];
  nodes[6].parent = nodes[5];
  nodes[2].parent = nodes[5];

  nodes[1].left = nodes[0];
  nodes[1].right = nodes[8];
  nodes[0].parent = nodes[1];
  nodes[8].parent = nodes[1];

  nodes[2].left = nodes[7];
  nodes[2].right = nodes[4];
  nodes[7].parent = nodes[2];
  nodes[4].parent = nodes[2];

  console.log("nodes:", nodes);
  return nodes;
}
