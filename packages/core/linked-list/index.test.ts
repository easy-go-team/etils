import { describe, expect, it } from 'vitest';
import { LinkedList, Node } from './index';

describe('链表的单元测试', () => {
  it('测试链表的push方法', () => {
    const node = new Node({
      name: 'dengnanhao',
      age: 20,
    });
    const linkedList = new LinkedList();
    linkedList.push(node);
  });
});
