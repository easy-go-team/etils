import {describe, expect, it} from 'vitest';
import {LinkedList, Node} from './index';

describe('链表的单元测试', () => {
    const node = new Node({
        name: 'dengnanhao',
        age: 20,
    });
    const node1 = new Node({
        name: 'dengnanhao1',
        age: 21,
    });
    it('测试链表的push方法', () => {
        const node = new Node({
            name: 'dengnanhao',
            age: 20,
        });
        const linkedList = new LinkedList();
        linkedList.push(node);
    });
    it('测试链表的removeAt方法', () => {
        const linkedList = new LinkedList();
        linkedList.push(node);
        linkedList.push(node1);
        expect(linkedList.removeAt(0)).toBe(node);
        expect(linkedList.removeAt(0)).toBe(node1);
    })
    it('测试链表的getElementAt方法', () => {
        const linkedList = new LinkedList();
        linkedList.push(node);
        linkedList.push(node1);
        expect(linkedList.getElementAt(0)?.element).toBe(node);
        expect(linkedList.getElementAt(1)?.element).toBe(node1);
    })
    it('测试链表的insert方法', () => {
        const linkedList = new LinkedList();
        linkedList.push(node);
        linkedList.push(node1);
        const node2 = new Node({
            name: 'dengnanhao2',
            age: 22,
        });
        linkedList.insert(node2, 1);
        expect(linkedList.getElementAt(1)?.element).toBe(node2);
    })
    it('测试链表的indexOf方法', () => {
        const linkedList = new LinkedList();
        linkedList.push(node);
        linkedList.push(node1);
        const node2 = new Node({
            name: 'dengnanhao2',
            age: 22,
        });
        linkedList.insert(node2, 1);
        expect(linkedList.indexOf(node2)).toBe(1);
    })
    it('测试链表的remove方法', () => {
        const linkedList = new LinkedList();
        linkedList.push(node);
        linkedList.push(node1);
        const node2 = new Node({
            name: 'dengnanhao2',
            age: 22,
        });
        linkedList.insert(node2, 1);
        expect(linkedList.remove(node2)).toBe(node2);
    })
    it('测试链表的isEmpty方法', () => {
        const linkedList = new LinkedList();
        expect(linkedList.isEmpty()).toBe(true);
        linkedList.push(node);
        expect(linkedList.isEmpty()).toBe(false);
    })
    it('测试链表的size方法', () => {
        const linkedList = new LinkedList();
        expect(linkedList.size()).toBe(0);
        linkedList.push(node);
        expect(linkedList.size()).toBe(1);
    })
    it('测试链表的getHead方法', () => {
        const linkedList = new LinkedList();
        expect(linkedList.getHead()).toBe(undefined);
        linkedList.push(node);
        expect(linkedList.getHead()?.element).toBe(node);
    })
    it('测试链表的toString方法', () => {
        const linkedList = new LinkedList();
        expect(linkedList.toString()).toBe('');
        linkedList.push(1);
        linkedList.push(2);
        linkedList.push(3);
        expect(linkedList.toString()).toBe('1,2,3');
    })
});
