import { describe, expect, it } from 'vitest';
import { Stack, baseConverter } from './index';
describe('栈单元测试', () => {
  it('测试栈的push方法', () => {
    const stack = new Stack();
    stack.push('a');
    stack.push('b');
    stack.push('c');
    expect(stack.toString()).toBe('a,b,c');
  });
  it('测试栈的pop方法', () => {
    const stack = new Stack();
    stack.push('a');
    stack.push('b');
    stack.push('c');
    expect(stack.pop()).toBe('c');
    expect(stack.pop()).toBe('b');
    expect(stack.pop()).toBe('a');
    expect(stack.pop()).toBe(undefined);
  });
  it('测试栈的peek方法', () => {
    const stack = new Stack();
    stack.push('a');
    stack.push('b');
    stack.push('c');
    expect(stack.peek()).toBe('c');
    expect(stack.peek()).toBe('c');
    expect(stack.peek()).toBe('c');
  });
  it('测试栈的size方法', () => {
    const stack = new Stack();
    stack.push('a');
    stack.push('b');
    stack.push('c');
    expect(stack.size()).toBe(3);
    stack.pop();
    expect(stack.size()).toBe(2);
    stack.pop();
    expect(stack.size()).toBe(1);
    stack.pop();
    expect(stack.size()).toBe(0);
  });
  it('测试栈的isEmpty方法', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
    stack.push('a');
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });
  it('测试栈的clear方法', () => {
    const stack = new Stack();
    stack.push('a');
    stack.push('b');
    stack.push('c');
    expect(stack.size()).toBe(3);
    stack.clear();
    expect(stack.size()).toBe(0);
  });

  it('baseConverter unit test', () => {
    const data = baseConverter(12, 8);
    expect(data).toBe('14');
  });
});
