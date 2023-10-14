import { describe, expect, it } from 'vitest';
import { Queue, Deque } from './index';

describe('队列单元测试', () => {
  it('测试队列的enqueue方法', () => {
    const queue = new Queue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    expect(queue.toString()).toBe('a,b,c');
  });
  it('测试队列的dequeue方法', () => {
    const queue = new Queue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    expect(queue.dequeue()).toBe('a');
    expect(queue.dequeue()).toBe('b');
    expect(queue.dequeue()).toBe('c');
    expect(queue.dequeue()).toBe(undefined);
  });
  it('测试队列的peek方法', () => {
    const queue = new Queue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    expect(queue.peek()).toBe('a');
    expect(queue.peek()).toBe('a');
    expect(queue.peek()).toBe('a');
  });
  it('测试队列的size方法', () => {
    const queue = new Queue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    expect(queue.size()).toBe(3);
    queue.dequeue();
    expect(queue.size()).toBe(2);
    queue.dequeue();
    expect(queue.size()).toBe(1);
    queue.dequeue();
    expect(queue.size()).toBe(0);
  });
  it('测试队列的isEmpty方法', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue('a');
    expect(queue.isEmpty()).toBe(false);
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });
  it('测试队列的clear方法', () => {
    const queue = new Queue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    expect(queue.size()).toBe(3);
    queue.clear();
    expect(queue.size()).toBe(0);
  });
});

describe('双端队列单元测试', () => {
  it('测试双端队列的addFront方法', () => {
    const deque = new Deque();
    deque.addFront('a');
    deque.addFront('b');
    deque.addFront('c');
    expect(deque.toString()).toBe('a,b,c');
  });
  it('测试双端队列的addBack方法', () => {
    const deque = new Deque();
    deque.addBack('a');
    deque.addBack('b');
    deque.addBack('c');
    expect(deque.toString()).toBe('a,b,c');
  });
  it('测试双端队列的removeFront方法', () => {
    const deque = new Deque();
    deque.addBack('a');
    deque.addBack('b');
    deque.addBack('c');
    expect(deque.removeFront()).toBe('a');
    expect(deque.removeFront()).toBe('b');
    expect(deque.removeFront()).toBe('c');
    expect(deque.removeFront()).toBe(undefined);
  });
  it('测试双端队列的removeBack方法', () => {
    const deque = new Deque();
    deque.addBack('a');
    deque.addBack('b');
    deque.addBack('c');
    expect(deque.removeBack()).toBe('c');
    expect(deque.removeBack()).toBe('b');
    expect(deque.removeBack()).toBe('a');
    expect(deque.removeBack()).toBe(undefined);
  });
  it('测试双端队列的peekFront方法', () => {
    const deque = new Deque();
    deque.addBack('a');
    deque.addBack('b');
    deque.addBack('c');
    expect(deque.peekFront()).toBe('a');
    expect(deque.peekFront()).toBe('a');
    expect(deque.peekFront()).toBe('a');
  });
  it('测试双端队列的peekBack方法', () => {
    const deque = new Deque();
    deque.addBack('a');
    deque.addBack('b');
    deque.addBack('c');
    expect(deque.peekBack()).toBe('c');
    expect(deque.peekBack()).toBe('c');
    expect(deque.peekBack()).toBe('c');
  });
  it('测试双端队列的size方法', () => {
    const deque = new Deque();
    deque.addBack('a');
    deque.addBack('b');
    deque.addBack('c');
    expect(deque.size()).toBe(3);
    deque.removeFront();
    expect(deque.size()).toBe(2);
    deque.removeFront();
    expect(deque.size()).toBe(1);
    deque.removeFront();
    expect(deque.size()).toBe(0);
  });
  it('测试双端队列的isEmpty方法', () => {
    const deque = new Deque();
    expect(deque.isEmpty()).toBe(true);
    deque.addBack('a');
    expect(deque.isEmpty()).toBe(false);
    deque.removeFront();
    expect(deque.isEmpty()).toBe(true);
  });
  it('测试双端队列的clear方法', () => {
    const deque = new Deque();
    deque.addBack('a');
    deque.addBack('b');
    deque.addBack('c');
    expect(deque.size()).toBe(3);
    deque.clear();
    expect(deque.size()).toBe(0);
  });
});
