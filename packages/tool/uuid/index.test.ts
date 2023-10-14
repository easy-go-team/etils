import { expect, it, describe } from 'vitest';
import { uuid } from './index';

describe('uuid单元测试', () => {
  it('should return a string', () => {
    expect(typeof uuid()).toBe('string');
  });
  it('should return a string with length 36', () => {
    expect(uuid().length).toBe(36);
  });
});
