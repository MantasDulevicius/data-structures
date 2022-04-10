const BinarySearchTree = require("../BST");

const generateBinaryTree = (BST) => {
  BST.insert(10);
  BST.insert(5);
  BST.insert(15);
  BST.insert(3);
  BST.insert(8);
  BST.insert(6);
  BST.insert(9);
  BST.insert(2);
  BST.insert(11);
  BST.insert(20);
  BST.insert(16);
};

// Visual represendation of above tree
//         10
//      /      \
//     5        15
//    / \      /  \
//   3   8    11  20
//  /   / \      /
// 2   6   9    16

describe.only("BST", () => {
  let BST;

  beforeEach(() => {
    BST = new BinarySearchTree();
  });

  it("should create empy BinarySearchTree", () => {
    expect(BST.root).toEqual(null);
  });

  it("should insert an item to BinarySearchTree", () => {
    BST.insert(1);

    expect(BST.root.val).toEqual(1);
  });

  it("should insert larger number to the right BinarySearchTree", () => {
    BST.insert(2);
    BST.insert(3);

    expect(BST.root.right.val).toEqual(3);
    expect(BST.root.left).toEqual(null);
  });

  it("should insert smaller number to the left BinarySearchTree", () => {
    BST.insert(2);
    BST.insert(1);

    expect(BST.root.left.val).toEqual(1);
    expect(BST.root.right).toEqual(null);
  });

  it("should not remove node from BinarySearchTree if value is not found", () => {
    BST.remove(15);

    expect(BST.root).toEqual(null);
  });

  it("should remove node from the right of BinarySearchTree ", () => {
    generateBinaryTree(BST);
    BST.remove(15);

    expect(BST.root.right.val).toEqual(16);
  });

  it("should remove node from the left of BinarySearchTree ", () => {
    generateBinaryTree(BST);
    BST.remove(8);

    expect(BST.root.left.right.val).toEqual(6);
  });
});
