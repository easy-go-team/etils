import { describe, expect, it } from 'vitest';

import { DoublyLinkedList, DoublyNode } from './index'

describe('双向链表单元测试', () => {
    const doublyNode = new DoublyNode(1);
    it('测试双向链表的push方法', () => {
        const doublyLinkedList = new DoublyLinkedList();
        doublyLinkedList.push(doublyNode);
        expect(doublyLinkedList.head?.element).toBe(doublyNode);
        expect(doublyLinkedList.tail?.element).toBe(doublyNode);
    })
    it('测试双向链表的insert方法', () => {
        const doublyLinkedList = new DoublyLinkedList();
        doublyLinkedList.push(doublyNode);
        const doublyNode1 = new DoublyNode(2);
        doublyLinkedList.insert(doublyNode1, 1);
        expect(doublyLinkedList.getElementAt(1)?.element).toBe(doublyNode1.element);
        expect(doublyLinkedList.getElementAt(1)?.prev?.element).toBe(doublyNode.element);
    })
})