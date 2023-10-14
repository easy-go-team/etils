export class LinkedList<T> {
  public count: number;
  public head: Node<T> | undefined;
  public equalsFn: Function;

  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element: T) {
    const node = new Node(element);
    let current: Node<T>;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  removeAt(index: number) {
    if (index < 0 || index >= this.count) {
      return undefined;
    }
    let current = this.head;
    if (index === 0) {
      this.head = current?.next;
    } else {
      const previous = this.getElementAt(index - 1);
      current = previous?.next;
      if (previous) {
        previous.next = current?.next;
      }
    }
    this.count--;
    return current?.element;
  }

  getElementAt(index: number) {
    if (index < 0 || index > this.count) {
      return undefined;
    }
    let node = this.head;
    for (let i = 0; i < index && node != null; i++) {
      node = node?.next;
    }
    return node;
  }

  insert(element: T, index: number) {
    if (index < 0 || index > this.count) {
      return false;
    }
    const node = new Node(element);
    if (index === 0) {
      const current = this.head;
      node.next = current;
      this.head = node;
    } else {
      const previous = this.getElementAt(index - 1);

      if (previous) {
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
    }
    this.count++;
    return true;
  }

  indexOf(element: T) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  remove(element: T) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getHead() {
    return this.head;
  }

  toString() {
    if (this.head == null) {
      return '';
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }
}

/**
 * 比较两个元素是否相等
 * @param a
 * @param b
 * @returns boolean
 */
export function defaultEquals<T>(a: T, b: T) {
  return a === b;
}

/**
 * 链表中中的元素
 */
export class Node<T> {
  element: T;
  next: any;
  constructor(element: T, next = undefined) {
    this.element = element;
    this.next = next;
  }
}
