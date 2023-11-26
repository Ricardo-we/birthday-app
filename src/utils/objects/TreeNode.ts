type TreeNodeIterationCallback<T> = (
  item: TreeNode<T>,
  nestingLevel: number
) => any;
type TreeNodeFindCallBack<T> = (
  item: TreeNode<T>,
  nestingLevel: number
) => boolean;

export class TreeNode<T> {
  children?: Array<TreeNode<T>>;
  parent: TreeNode<T> | null;
  value: T | null;

  constructor(value?: T) {
    this.children = [];
    this.parent = null;
    this.value = value ?? null;
  }

  /**
   * Returns the nesting level of the node.
   * @returns The nesting level of the node.
   */
  getNestingLevel() {
    let level = 0;
    let parent = this.parent;
    while (parent !== null) {
      parent = parent.parent;
      level++;
    }
    return level;
  }

  /**
   * Executes a callback function for each node in the tree.
   * @param cb The callback function to execute for each node.
   */
  forEach(cb: TreeNodeIterationCallback<T>) {
    cb(this, this.getNestingLevel());
    if (!this.children) return;
    for (const item of this.children) {
      item.forEach(cb);
    }
  }

  /**
   * Creates a new array by executing a callback function on each node in the tree.
   * @param cb The callback function to execute for each node.
   * @returns An array of values returned by the callback function.
   */
  map(cb: TreeNodeIterationCallback<T>) {
    const result: any = [];
    const nestLevel = this.getNestingLevel();
    result.push(cb(this, nestLevel));
    if (!this.children) return;
    for (const item of this.children) {
      result.push(item.map(cb));
    }
    return result;
  }

  /**
   * Finds a node in the tree that satisfies the provided testing function.
   * @param cb The testing function.
   * @returns The first node that satisfies the testing function, or undefined if no node is found.
   */
  find(cb: TreeNodeFindCallBack<T>) {
    const founded = cb(this, this.getNestingLevel());
    if (founded) return this;
    if (!this.children) return;
    for (const item of this.children) {
      const founded = item.find(cb);
      if (founded) return item;
    }
  }

  /**
   * Appends a child node to the current node.
   * @param node The node to append as a child.
   * @returns The current node.
   */
  append(node: TreeNode<T>) {
    node.parent = this;
    this.children?.push(node);
    return this;
  }
}
